import React from "react";
import Image from "next/image";
import { Button, Card, Row, Space } from "antd";
import { Scada } from "next/font/google";
import ShippingButtons from "./ShippingButtons";
import { MainProps } from "@/types";

const scada = Scada({
  weight: "400",
  subsets: ["cyrillic-ext", "latin-ext"],
});

const price = {
  currency: "Грн",
  amount: 1799,
  compareAmount: 2999, // Comparison price
};

interface PriceBlockProps {
  handleCreateOrder: () => void;
  mainProps: MainProps;
}

const priceContainer: React.CSSProperties = {
  backgroundImage: "url('/assets/img/background/blur.webp')",
  //   backgroundImage: "url('/assets/img/background/gradient-1.webp')",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const OrderBlock: React.FC<PriceBlockProps> = ({
  handleCreateOrder,
  mainProps,
}) => {
  // const { currency, amount, compareAmount } = price;

  return (
    <>
      <ShippingButtons handleCreateOrder={handleCreateOrder} />
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
          <h3>Грн</h3>
          <p>{mainProps.price.toFixed(2)}</p>
          {mainProps.comparePrice &&
            mainProps.comparePrice !== mainProps.price && (
              <p
              // style={{
              //   backgroundColor: "#3498db",
              //   position: "relative",
              //   transform: "perspective(400px) rotateX(70deg) rotateY(10deg)",
              // }}
              >
                <del>{mainProps.comparePrice.toFixed(2)}</del>
              </p>
            )}
        </div>

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
