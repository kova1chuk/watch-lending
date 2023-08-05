import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Input,
  List,
  Modal,
  Result,
  Row,
  Select,
  Space,
  Steps,
  Tabs,
  TabsProps,
} from "antd";
import Image from "next/image";
import LocationInfo from "../LocationInfo";
import NovaPoshtaAreasContainer from "@/containers/NovaPoshtaAreasContainer";
import ShippingTabButtons from "./ShippingTabButtons";
import TextArea from "antd/es/input/TextArea";

interface OrderModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const OrderModal: React.FC<OrderModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const [selectedShippingTab, setSelectedShippingTab] = useState<
    "nova" | "ukr"
  >("nova");
  const [ukr, setUkr] = useState<string | undefined>();
  const [nova, setNova] = useState<string | undefined>();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [okText, setOkText] = useState("Далі");

  const handleTabChange = (tab: "nova" | "ukr") => {
    setSelectedShippingTab(tab);
    // Perform any other logic here
  };

  const items: TabsProps["items"] = [
    {
      key: "nova",
      label: `Tab 1`,
      children: (
        <TextArea
          value={nova}
          onChange={(e) => setNova(e.target.value)}
          placeholder="Адреса на доставку Нова Пошта"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
        // <NovaPoshtaAreasContainer
        //   onSettlementSelected={(settlementRef: string): void => {
        //     throw new Error("Function onSettlementSelected not implemented.");
        //   }}
        // />
      ),
    },
    {
      key: "ukr",
      label: `Tab 2`,
      children: (
        <TextArea
          value={ukr}
          onChange={(e) => setUkr(e.target.value)}
          placeholder="Адреса на доставку Укрпошта"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      ),
    },
  ];

  const sendOrderData = async () => {
    console.log(selectedShippingTab, selectedShippingTab == "nova");
    const orderDetails = {
      product: `Продукт: Годинник Cheetah Black/Безкоштовна доставка/Подарункова упаковка`,
      name: `Замовник: ${name}`,
      phone: `Номер телефону: ${phoneNumber}`,
      shipping: `Доставка: ${
        selectedShippingTab === "nova"
          ? `Нова Пошта - ${nova}`
          : `Укрпошта - ${ukr}`
      }`,
      price: `1799грн`,
    };

    const webhookUrl = `${process.env.NEXT_PUBLIC_TG_BOT_URL}/order`; // Replace with your webhook URL

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });

      const data = await response.json();
      console.log("Order details sent to Telegram bot:", data);
    } catch (error) {
      console.error("Error sending order details:", error);
    }
  };

  const handleOk = async () => {
    // Handle OK action here

    if (currentStep < 3) {
      if (currentStep === 1) setOkText("Замовити");
      if (currentStep === 2) {
        try {
          sendOrderData();
          setOkText("Закрити");
        } catch {
          console.error("Order not sent");
        }
      }
      setCurrentStep(currentStep + 1);
    } else {
      setIsModalOpen(false);
      setCurrentStep(0);
      setOkText("Далі");
    }
  };

  const handleCancel = () => {
    if (currentStep < 3 && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      setIsModalOpen(false);
      setCurrentStep(0);
    }
  };

  const renderContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <ShippingTabButtons
              currentTab={selectedShippingTab}
              handleTabChange={handleTabChange}
            />
            <Tabs
              activeKey={selectedShippingTab}
              items={items}
              style={{ margin: "1.5rem 0" }}
              renderTabBar={() => <></>}
              animated
            />
            {/* <LocationInfo /> */}
          </>
        );
      case 1:
        return (
          <div>
            <label>Ім'я/Прізвище</label>
            <Input
              style={{ marginBottom: "1rem" }}
              placeholder="Введіть ваше ім'я"
              pattern="[A-Za-z]*"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Номер телефону</label>
            <Input
              addonBefore="+380"
              maxLength={9}
              placeholder="Введіть номер"
              pattern="[0-9]*"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        );
      case 2:
        return (
          <Space
            direction="vertical"
            size="small"
            style={{ marginBottom: "1.5rem" }}
          >
            <Divider orientation="left">Ваше замовлення</Divider>
            <List
              size="large"
              // header={<div>Header</div>}
              // footer={<div>Footer</div>}
              bordered
              dataSource={[
                `Продукт: Годинник Cheetah Black/Безкоштовна доставка/Подарункова упаковка`,
                `Замовник: ${name}`,
                `Номер телефону: ${phoneNumber}`,
                `Доставка: ${
                  selectedShippingTab === "nova"
                    ? `Нова Пошта - ${nova}`
                    : `Укрпошта - ${ukr}`
                }`,
                `Ціна до сплати на відділенні(+комісія пошти): 1799грн`,
              ]}
              renderItem={(item: string) => <List.Item>{item}</List.Item>}
            />
            {/* <Text>{`Продукт: Годинник Cheetah Black/Безкоштовна доставка/Подарункова упаковка`}</Text>
            <Text>{`Замовник: ${name}`}</Text>
            <Text>{`Номер телефону: ${phoneNumber}`}</Text>
            <Text>{`Доставка: ${
              selectedShippingTab === "nova"
                ? `Нова Пошта - ${nova}`
                : `Укрпошта - ${ukr}`
            }`}</Text>
            <Text>{`Ціна до сплати на відділенні(+комісія пошти): 1799грн`}</Text> */}
          </Space>
        );
      case 3:
        return (
          <Result
            status="success"
            title="Дякуємо за ваш вибір!"
            subTitle="Ми відправимо ваш годинний найближчим часом, очікуйте повідомлення з накладною."
            // extra={[
            //   <Button type="primary" key="console">
            //     Go Console
            //   </Button>,
            //   <Button key="buy">Buy Again</Button>,
            // ]}
          />
        );
      default:
        return null;
    }
  };

  const renderStepsAndDivider = () => {
    if (currentStep < 3) {
      return (
        <>
          <Steps
            current={currentStep}
            items={[
              {
                title: "Доставка",
                description: "Оберіть спосіб доставки",
              },
              {
                title: "Контакти",
                description: "Заповніть контактні данні",
              },
              {
                title: "Замовлення",
                description: "Підсумок за замовленням",
              },
            ]}
          />
          <Divider style={{ marginTop: "0.55rem" }} />
        </>
      );
    }
    return null;
  };

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={okText}
      cancelText="Назад"
      okButtonProps={{ size: "large", style: { background: "black" } }}
      cancelButtonProps={{
        size: "large",
        style: {
          display: currentStep === 3 ? "none" : "inline-block",
        },
      }}
    >
      {renderStepsAndDivider()}
      {renderContent()}
    </Modal>
  );
};

export default OrderModal;
