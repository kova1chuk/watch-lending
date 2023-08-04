import React from "react";
import Image from "next/image";
import { Button, Row } from "antd";

interface ShippingButtonsProps {
  handleCreateOrder: () => void;
}

const ShippingButtons: React.FC<ShippingButtonsProps> = ({
  handleCreateOrder,
}) => {
  return (
    <Row
      justify="space-around"
      align="middle"
      style={{ maxWidth: "800px", margin: "0 auto" }}
    >
      <Row justify="center" style={{ margin: "0.35rem" }}>
        <Button
          type="default"
          size="large"
          onClick={handleCreateOrder}
          style={{
            fontStyle: "bold",
            lineHeight: "26px",
            fontSize: "20px",
            borderColor: "#787878",
            color: "black",
            display: "flex",
            justifyContent: "center",
            height: "2.6rem",
          }}
          icon={
            <Image
              src="/assets/img/svg/common/NovaPoshtaLogo.svg"
              alt={"Нова пошта логотип"}
              width={24}
              height={24}
            />
          }
        >
          <p>
            <span
              style={{
                color: "#CA3B2B",
              }}
            >
              Нова пошта{" "}
            </span>
            <span
              style={{
                fontSize: "1rem",
              }}
            >
              - отримання
            </span>
            {"  "}1 - 2 дні
          </p>
        </Button>
      </Row>
      <Row justify="center" style={{ margin: "1.5rem" }}>
        <Button
          type="default"
          size="large"
          onClick={handleCreateOrder}
          style={{
            fontStyle: "bold",
            lineHeight: "26px",
            fontSize: "20px",
            borderColor: "#787878",
            color: "black",
            display: "flex",
            justifyContent: "center",
            height: "2.6rem",
          }}
          icon={
            <Image
              src="/assets/img/svg/common/UkrPoshtaLogo.svg"
              alt={"Укрпошта логотип"}
              width={24}
              height={24}
            />
          }
        >
          <p>
            <span
              style={{
                color: "#F5C258",
              }}
            >
              Укрпошта{" "}
            </span>
            <span
              style={{
                fontSize: "1rem",
              }}
            >
              - отримання
            </span>
            {"  "}2 - 5 дні
          </p>
        </Button>
      </Row>
    </Row>
  );
};

export default ShippingButtons;
