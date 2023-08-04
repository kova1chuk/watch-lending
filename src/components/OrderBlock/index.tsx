import React from "react";
import Image from "next/image";
import { Button, Card, Row, Space } from "antd";
import { Scada } from "next/font/google";

const scada = Scada({
  weight: "400",
  subsets: ["cyrillic-ext", "latin-ext"],
});

const price = {
  currency: "Грн",
  amount: 2999.99,
  compareAmount: 3499.99, // Comparison price
};

interface PriceBlockProps {
  handleCreateOrder: () => void;
}

const priceContainer: React.CSSProperties = {
  backgroundImage: "url('/assets/img/background/blur.webp')",
  //   backgroundImage: "url('/assets/img/background/gradient-1.webp')",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const OrderBlock: React.FC<PriceBlockProps> = ({ handleCreateOrder }) => {
  const { currency, amount, compareAmount } = price;

  return (
    <>
      <Row
        id="buy-now"
        justify="space-around"
        align="middle"
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <Row justify="center" style={{ margin: "0.35rem" }}>
          <Space.Compact>
            <Button
              type="default"
              size="large"
              onClick={handleCreateOrder}
              style={{
                color: "#CA3B2B",
                fontStyle: "bold",
                lineHeight: "26px",
                fontSize: "20px",
                borderColor: "#787878",
                display: "flex",
                justifyContent: "center",
                borderRight: "none",
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
              Нова пошта -
            </Button>
            <Card
              size="small"
              style={{
                // color: "#CA3B2B",
                fontStyle: "bold",
                lineHeight: "16px",
                fontSize: "20px",
                borderColor: "#787878",
                display: "flex",
                justifyContent: "center",
                padding: 0,
                height: "2.6rem",
                borderRadius: "0 8px 8px 0",
                borderLeft: "none",
              }}
            >
              <p>
                <span
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  отримання
                </span>
                {"  "}1 - 2 дні
              </p>
            </Card>
          </Space.Compact>
        </Row>
        <Row justify="center" style={{ margin: "1.5rem" }}>
          <Space.Compact>
            <Button
              type="default"
              size="large"
              onClick={handleCreateOrder}
              style={{
                color: "#F5C258",
                fontStyle: "bold",
                lineHeight: "26px",
                fontSize: "20px",
                borderColor: "#787878",
                display: "flex",
                justifyContent: "center",
                borderRight: "none",
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
              Укрпошта -
            </Button>
            <Card
              size="small"
              style={{
                // color: "#CA3B2B",
                fontStyle: "bold",
                lineHeight: "16px",
                fontSize: "20px",
                borderColor: "#787878",
                display: "flex",
                justifyContent: "center",
                padding: 0,
                height: "2.6rem",
                borderRadius: "0 8px 8px 0",
                borderLeft: "none",
              }}
            >
              <p>
                <span
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  отримання
                </span>
                {"  "}2 - 5 днів
              </p>
            </Card>
          </Space.Compact>
        </Row>
      </Row>
      <section
        style={{
          ...priceContainer,
          margin: "0 auto",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "800px",
          color: "white",
          fontSize: "1.15rem",
          fontWeight: "bold",
          ...scada,
          // borderRadius: "1rem",
        }}
      >
        <div
          style={{
            flex: "1",
            // marginLeft: "1rem",
            // padding: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            maxWidth: "300px",
          }}
        >
          <h3>{currency}</h3>
          <p>{amount.toFixed(2)}</p>
          {compareAmount && compareAmount !== amount && (
            <p>
              <del>{compareAmount.toFixed(2)}</del>
            </p>
          )}
        </div>
        {/* <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      > */}
        <Space>
          <Button
            type="primary"
            size="large"
            style={{ background: "white", color: "black" }}
            onClick={handleCreateOrder}
          >
            Замовити
          </Button>
        </Space>
        {/* </div> */}
      </section>
    </>
  );
};

export default OrderBlock;
