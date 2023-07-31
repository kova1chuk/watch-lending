import React from "react";

interface PriceBlockProps {
  currency: string;
  amount: number;
}

const PriceBlock: React.FC<PriceBlockProps> = ({ currency, amount }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <h3>{currency}</h3>
      <p>{amount.toFixed(2)}</p>
      <button>Додати у кошик</button>
    </div>
  );
};

export default PriceBlock;
