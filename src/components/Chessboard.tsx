import React from "react";
import Image from "next/image";
import { Row, Col } from "antd";

interface AdvantageData {
  image: string;
  title: string;
  description: string;
}

const advantagesData: AdvantageData[] = [
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-3.jpg",
    title: "Перевага 1",
    description: "Опис переваги 1 продукту",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-3.jpg",
    title: "Перевага 2",
    description: "Опис переваги 2 продукту",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-3.jpg",
    title: "Перевага 3",
    description: "Опис переваги 3 продукту",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-3.jpg",
    title: "Перевага 4",
    description: "Опис переваги 4 продукту",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-3.jpg",
    title: "Перевага 5",
    description: "Опис переваги 5 продукту",
  },
];

const DescriptionBox: React.FC<{ advantage: AdvantageData }> = ({
  advantage,
}) => {
  return (
    <Col xs={24} sm={12}>
      <div style={{ border: "1px solid #ccc", padding: "20px" }}>
        <h3 style={{ marginBottom: "10px" }}>{advantage.title}</h3>
        <p style={{ marginBottom: "0" }}>{advantage.description}</p>
      </div>
    </Col>
  );
};

const ImageBox: React.FC<{ advantage: AdvantageData }> = ({ advantage }) => {
  return (
    <Col xs={24} sm={12}>
      <div style={{ border: "1px solid #ccc", padding: "20px" }}>
        <Image
          src={advantage.image}
          alt={advantage.title}
          width={400} // Adjust the width of the image as per your requirements
          height={300} // Adjust the height of the image as per your requirements
          layout="responsive" // Use responsive layout to maintain aspect ratio
        />
      </div>
    </Col>
  );
};

const Chessboard = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      {advantagesData.map((advantage, index) => (
        <Row key={index} gutter={[16, 16]}>
          {index % 2 ? (
            <>
              <DescriptionBox advantage={advantage} />
              <ImageBox advantage={advantage} />
            </>
          ) : (
            <>
              <ImageBox advantage={advantage} />
              <DescriptionBox advantage={advantage} />
            </>
          )}
        </Row>
      ))}
    </div>
  );
};

export default Chessboard;
