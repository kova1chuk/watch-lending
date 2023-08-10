"use client";

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
  Skeleton,
  Space,
  Steps,
  Tabs,
  TabsProps,
} from "antd";
import { DotChartOutlined } from "@ant-design/icons";
import Image from "next/image";
import TextArea from "antd/es/input/TextArea";

import NovaPoshtaAreasContainer from "@/containers/NovaPoshtaAreasContainer";

import LocationInfo from "../LocationInfo";
import ShippingTabButtons from "./ShippingTabButtons";

interface OrderModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  productTitle: string;
  productPrice: number;
}

const OrderModal: React.FC<OrderModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  productTitle,
  productPrice,
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
  const [okId, setOkId] = useState("");

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sendOrderData = async () => {
    // setCurrentStep(4);
    console.log(selectedShippingTab, selectedShippingTab == "nova");
    const orderDetails = {
      product: `Продукт: ${productTitle}/Безкоштовна доставка/Подарункова упаковка`,
      name: `Замовник: ${name}`,
      phone: `Номер телефону: +380${phoneNumber}`,
      shipping: `Доставка: ${
        selectedShippingTab === "nova"
          ? `Нова Пошта - ${nova}`
          : `Укрпошта - ${ukr}`
      }`,
      price: productPrice,
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
      setCurrentStep(4);
    } catch (error) {
      console.error("Error sending order details:", error);
    }
  };

  const handleNext = async () => {
    setCurrentStep(currentStep + 1);

    // if (currentStep < 3) {
    //   if (currentStep === 1) setOkText("Замовити");
    //   if (currentStep === 2) {
    //     try {
    //       sendOrderData();
    //       setOkText("Закрити");
    //     } catch {
    //       console.error("Order not sent");
    //     }
    //   }
    //   setCurrentStep(currentStep + 1);
    // } else {
    //   setIsModalOpen(false);
    //   setCurrentStep(0);
    //   setOkText("Далі");
    // }
  };

  useEffect(() => {
    if (currentStep === 2) setOkId("make-order");
    else setOkId("");

    switch (currentStep) {
      case 0:
        setOkText("Додати адресу");
        break;
      case 1:
        setOkText("Додати номер");
        break;
      case 2:
        setOkText("Зробити замовлення");
        break;
      case 3:
        sendOrderData();
        setOkText("Опрацюваняя замовлення");
        break;
      case 4:
        setOkText("Повернутись до продукту");
        break;
      default:
        setCurrentStep(0);
        setIsModalOpen(false);
    }
  }, [currentStep, sendOrderData, setIsModalOpen]);

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
            <label>Ім &ldquo;я/Прізвище</label>
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
                `Продукт: Годинник ${productTitle}/Безкоштовна доставка/Подарункова упаковка`,
                `Замовник: ${name}`,
                `Номер телефону: +380${phoneNumber}`,
                `Доставка: ${
                  selectedShippingTab === "nova"
                    ? `Нова Пошта - ${nova}`
                    : `Укрпошта - ${ukr}`
                }`,
                `Ціна до сплати на відділенні(+комісія пошти): ${productPrice}грн`,
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
      case 4:
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
      case 3:
        return (
          <>
            <Skeleton />
            {/* <Divider /> */}
            {/* <Form layout="inline" style={{ margin: "16px 0" }}>
              <Space size={16} wrap>
                <Form.Item label="Active">
                  <Switch checked={active} onChange={handleActiveChange} />
                </Form.Item>
                <Form.Item label="Button and Input Block">
                  <Switch checked={block} onChange={handleBlockChange} />
                </Form.Item>
                <Form.Item label="Size">
                  <Radio.Group value={size} onChange={handleSizeChange}>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="Button Shape">
                  <Radio.Group value={buttonShape} onChange={handleShapeButton}>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="square">Square</Radio.Button>
                    <Radio.Button value="round">Round</Radio.Button>
                    <Radio.Button value="circle">Circle</Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="Avatar Shape">
                  <Radio.Group value={avatarShape} onChange={handleAvatarShape}>
                    <Radio.Button value="square">Square</Radio.Button>
                    <Radio.Button value="circle">Circle</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Space>
            </Form> */}
          </>
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
      onOk={handleNext}
      onCancel={handleCancel}
      okText={okText}
      cancelText="Назад"
      okButtonProps={{
        id: okId,
        size: "large",
        style: { background: "black" },
        loading: currentStep === 3,
      }}
      cancelButtonProps={{
        size: "large",
        style: {
          display: currentStep === 4 ? "none" : "inline-block",
        },
      }}
    >
      {renderStepsAndDivider()}
      {renderContent()}
    </Modal>
  );
};

export default OrderModal;
