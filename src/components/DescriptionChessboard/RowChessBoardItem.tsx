import React from "react";
import { Row } from "antd";
import DescriptionBox from "./DescriptionBox"; // Update the path to DescriptionBox component
import ImageBox from "./ImageBox"; // Update the path to ImageBox component
import { AdvantageData } from "./advantagesData";

interface RowChessBoardItemProps {
  index: number;
  advantage: AdvantageData;
}

const RowChessBoardItem: React.FC<RowChessBoardItemProps> = ({
  index,
  advantage,
}) => {
  const isOddIndex = index % 2 === 1;

  return (
    <Row key={index} gutter={[16, 16]} style={{ margin: "1rem 0" }}>
      {isOddIndex ? (
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
  );
};

export default RowChessBoardItem;
