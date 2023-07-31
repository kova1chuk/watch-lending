import React from "react";
import { Row, Col } from "antd";

const advantagesData = [
  {
    image: "image1.jpg",
    title: "Перевага 1",
    description: "Опис переваги 1 продукту",
  },
  {
    image: "image2.jpg",
    title: "Перевага 2",
    description: "Опис переваги 2 продукту",
  },
  {
    image: "image3.jpg",
    title: "Перевага 3",
    description: "Опис переваги 3 продукту",
  },
  {
    image: "image4.jpg",
    title: "Перевага 4",
    description: "Опис переваги 4 продукту",
  },
  {
    image: "image5.jpg",
    title: "Перевага 5",
    description: "Опис переваги 5 продукту",
  },
];

const Chessboard = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      {advantagesData.map((advantage, index) => (
        <Row key={index} gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <div style={{ border: "1px solid #ccc", padding: "20px" }}>
              <h3 style={{ marginBottom: "10px" }}>{advantage.title}</h3>
              <p style={{ marginBottom: "0" }}>{advantage.description}</p>
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div style={{ border: "1px solid #ccc", padding: "20px" }}>
              <img
                src={advantage.image}
                alt={advantage.title}
                style={{ width: "100%", marginBottom: "10px" }}
              />
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Chessboard;
