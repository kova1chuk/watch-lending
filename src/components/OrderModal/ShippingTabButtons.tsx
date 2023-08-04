import React from "react";
import { Button } from "antd";
import Image from "next/image";
import { Space, Row } from "antd";

interface ShippingTabButtonsProps {
  currentTab: "nova" | "ukr";
  handleTabChange: (tab: "nova" | "ukr") => void;
}

const ShippingTabButtons: React.FC<ShippingTabButtonsProps> = ({
  currentTab,
  handleTabChange,
}) => {
  return (
    <Row justify="center">
      <Space.Compact>
        <Button
          type="default"
          size="large"
          style={{
            color: currentTab === "nova" ? "#CA3B2B" : "#808080",
            fontWeight: currentTab === "nova" ? "bold" : 400,
            lineHeight: "24px",
            borderColor: currentTab === "nova" ? "#CA3B2B" : "#808080",
            // backgroundColor: currentTab === "nova" ? "#CA3B2B" : "inherit",
            display: "flex",
            justifyContent: "center",
          }}
          onClick={() => handleTabChange("nova")}
          icon={
            <Image
              src="/assets/img/svg/common/NovaPoshtaLogo.svg"
              alt={"Нова пошта логотип"}
              width={24}
              height={24}
            />
          }
        >
          Нова пошта
        </Button>
        <Button
          type="default"
          size="large"
          style={{
            color: currentTab === "ukr" ? "#F5C258" : "#808080",
            fontWeight: currentTab === "ukr" ? "bold" : 400,
            // fontSize: "20px",
            lineHeight: "24px",
            borderColor: currentTab === "ukr" ? "#F5C258" : "#808080",
            // backgroundColor: currentTab === "ukr" ? "#F5C258" : "inherit",
            display: "flex",
            justifyContent: "center",
          }}
          onClick={() => handleTabChange("ukr")}
          icon={
            <Image
              src="/assets/img/svg/common/UkrPoshtaLogo.svg"
              alt={"Укрпошта логотип"}
              width={24}
              height={24}
            />
          }
        >
          Укрпошта
        </Button>
      </Space.Compact>
    </Row>
  );
};

export default ShippingTabButtons;
