import React from "react";
import { Col, Divider } from "antd";

interface Advantage {
  title: string;
  description: string;
  // Add any additional properties
}

const DescriptionBox: React.FC<{ advantage: Advantage }> = ({ advantage }) => {
  return (
    <Col xs={24} sm={12}>
      <div
        style={{
          // border: "1px solid #ccc",
          padding: "0 20px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // textAlign: "center",
        }}
      >
        <h4
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6rem",
            fontWeight: "bold",
          }}
        >
          {advantage.title}
        </h4>
        <Divider
          style={{
            marginTop: "0.6rem",
            marginBottom: "1rem",
          }}
        />
        <p
          style={{ marginBottom: "0", fontSize: "1rem", lineHeight: "1.3rem" }}
        >
          {advantage.description}
        </p>
      </div>
    </Col>
  );
};

export default DescriptionBox;
