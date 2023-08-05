import {
  Button,
  Divider,
  Modal,
  Row,
  Space,
  Steps,
  Tabs,
  TabsProps,
} from "antd";
import React, { useState } from "react";
import Image from "next/image";
import LocationInfo from "../LocationInfo";
import NovaPoshtaAreasContainer from "@/containers/NovaPoshtaAreasContainer";
import ShippingTabButtons from "./ShippingTabButtons";
import TextArea from "antd/es/input/TextArea";

interface OrderModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const description = "This is a description.";

const OrderModal: React.FC<OrderModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const [currentTab, setCurrentTab] = useState<"nova" | "ukr">("nova");
  const [ukr, setUkr] = useState();

  const handleTabChange = (tab: "nova" | "ukr") => {
    setCurrentTab(tab);
    // Perform any other logic here
  };
  const items: TabsProps["items"] = [
    {
      key: "nova",
      label: `Tab 1`,
      children: (
        <NovaPoshtaAreasContainer
          onSettlementSelected={function (settlementRef: string): void {
            throw new Error("Function onSettlementSelected not implemented.");
          }}
        />
      ),
    },
    {
      key: "ukr",
      label: `Tab 2`,
      children: (
        <TextArea
          value={ukr}
          onChange={(e) => setUkr(e.target.value)}
          placeholder="Адреса на доставку Укрпоштою"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      ),
    },
  ];

  const handleOk = () => {
    // Handle OK action here
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    // Handle Cancel action here
    setIsModalOpen(false);
  };

  return (
    <Modal
      //   title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      cancelButtonProps={{
        style: {
          display: "none",
        },
      }}
    >
      <Steps
        current={0}
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
      <ShippingTabButtons
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      />

      <Tabs
        activeKey={currentTab}
        items={items}
        renderTabBar={() => <></>}
        animated
      />
      <LocationInfo />
    </Modal>
  );
};

export default OrderModal;
