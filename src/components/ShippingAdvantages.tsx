import React from "react";
import { Row, Col } from "antd";

interface Advantage {
  title: string;
  description: string;
}

interface ShippingAdvantagesProps {
  shippingInfo: string;
  advantages: Advantage[];
}

const ShippingAdvantages: React.FC<ShippingAdvantagesProps> = ({
  shippingInfo,
  advantages,
}) => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <div
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              minHeight: "200px",
            }}
          >
            <h3>Доставка</h3>
            <p>{shippingInfo}</p>
          </div>
        </Col>
        <Col xs={24} sm={12}>
          <div
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              minHeight: "200px",
            }}
          >
            <h3>Переваги замовляти саме в нас</h3>
            <ul>
              {advantages.map((advantage, index) => (
                <li key={index}>
                  <strong>{advantage.title}</strong>
                  <p>{advantage.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ShippingAdvantages;
