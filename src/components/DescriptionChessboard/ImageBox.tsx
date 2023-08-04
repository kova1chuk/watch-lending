import React from "react";
import { Col } from "antd";
import Image from "next/image"; // Import the Image component
import { AdvantageData } from "./advantagesData";

const ImageBox: React.FC<{ advantage: AdvantageData }> = ({ advantage }) => {
  return (
    <Col xs={24} sm={12}>
      <div style={{ padding: "0 20px" }}>
        <Image
          src={advantage.image}
          alt={advantage.title}
          style={{ borderRadius: "1.5rem", objectFit: "cover" }}
          width={400} // Adjust the width of the image as per your requirements
          height={300} // Adjust the height of the image as per your requirements
        />
      </div>
    </Col>
  );
};

export default ImageBox;
