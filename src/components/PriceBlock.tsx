import React from "react";
import { Button, Space } from "antd";

const price = {
  currency: "Грн",
  amount: 2999.99,
  compareAmount: 3499.99, // Comparison price
};

interface PriceBlockProps {}

const PriceBlock: React.FC<PriceBlockProps> = () => {
  const { currency, amount, compareAmount } = price;

  return (
    <section
      style={{
        margin: "40px 0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <h2 style={{ flex: "1", marginLeft: "1rem" }}>Ціна продукту</h2>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Space>
          <h3>{currency}</h3>
          <p>{amount.toFixed(2)}</p>
          {compareAmount && compareAmount !== amount && (
            <p>
              <del>{compareAmount.toFixed(2)}</del>
            </p>
          )}
          <Button
            type="primary"
            size="large"
            color="black"
            onClick={() => console.log("Замовити")}
          >
            Замовити
          </Button>
        </Space>
      </div>
    </section>
  );
};

export default PriceBlock;
