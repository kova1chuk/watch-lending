import React from "react";
import { List, Space } from "antd";

interface Characteristic {
  title: string;
  icon: React.ReactNode;
}

interface WatchCharacteristicsProps {
  characteristics: Characteristic[];
}

const WatchCharacteristics: React.FC<WatchCharacteristicsProps> = ({
  characteristics,
}) => {
  return (
    <List
      dataSource={characteristics}
      renderItem={(item) => (
        <List.Item style={{ display: "flex", alignItems: "center" }}>
          <Space>
            <div style={{ marginRight: "8px" }}>{item.icon}</div>
            <span>{item.title}</span>
          </Space>
        </List.Item>
      )}
      direction="horizontal" // Set the direction to horizontal
    />
  );
};

export default WatchCharacteristics;
