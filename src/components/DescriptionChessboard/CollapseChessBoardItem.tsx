import React from "react";
import { Collapse, Divider } from "antd";

import ImageBox from "./ImageBox"; // Update the path to ImageBox component
import { AdvantageData } from "./types";

interface CollapseChessBoardItemProps {
  index: number;
  advantage: AdvantageData;
}

const CollapseChessBoardItem: React.FC<CollapseChessBoardItemProps> = ({
  index,
  advantage,
}) => {
  return (
    <>
      <Collapse
        key={index}
        expandIconPosition="end"
        ghost
        style={{ margin: "1.5rem 1rem 0.3rem" }}
        items={[
          {
            label: (
              <>
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
                    marginBottom: "0",
                  }}
                />
              </>
            ),
            children: (
              <p
                style={{
                  marginBottom: "0",
                  fontSize: "1rem",
                  lineHeight: "1.3rem",
                }}
              >
                {advantage.description}
              </p>
            ),
          },
        ]}
      />
      <ImageBox advantage={advantage} />
    </>
  );
};

export default CollapseChessBoardItem;
