import React from "react";
import { List, Space } from "antd";
import {
  ClockCircleOutlined,
  HeartOutlined,
  EnvironmentOutlined,
  DollarCircleOutlined,
  StarOutlined,
  SyncOutlined,
} from "@ant-design/icons";

const characteristics = [
  {
    title: "Точний механізм",
    icon: <ClockCircleOutlined style={{ fontSize: "2rem" }} />,
  },
  {
    title: "Стійкість до води",
    icon: <HeartOutlined style={{ fontSize: "2rem" }} />,
  },
  {
    title: "Швидка доставка",
    icon: <EnvironmentOutlined style={{ fontSize: "2rem" }} />,
  },
  {
    title: "Найкраща ціна",
    icon: <DollarCircleOutlined style={{ fontSize: "2rem" }} />,
  },
  {
    title: "Найвища якість",
    icon: <StarOutlined style={{ fontSize: "2rem" }} />,
  },
  {
    title: "Гарантія 12 міс",
    icon: <SyncOutlined style={{ fontSize: "2rem" }} />,
  },
];

const characteristicContainer: React.CSSProperties = {
  padding: "1rem",
};

const glassStyle: React.CSSProperties = {
  background: "rgba(0, 0, 0, 0.27)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(255, 255, 255, 0.1), 0.1)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(201, 201, 201, 0.17)",
};

const characteristicItemStyle: React.CSSProperties = {
  margin: "0.5rem",
};

interface Characteristic {
  title: string;
  icon: React.ReactNode;
}

interface WatchCharacteristicsProps {
  // characteristics: Characteristic[];
}

const WatchCharacteristics: React.FC<WatchCharacteristicsProps> = (
  {
    // characteristics,
  }
) => {
  return (
    <section style={{ ...characteristicContainer }}>
      <List
        dataSource={characteristics}
        grid={{
          gutter: 8,
          xs: 2,
          sm: 3,
          md: 3,
          lg: 3,
          xl: 6,
          xxl: 6,
        }}
        renderItem={(item) => (
          <List.Item
            style={{
              ...glassStyle,
              ...characteristicItemStyle,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              color: "white",
              alignItems: "center",
              margin: "0.5rem",
              padding: "1.5rem 1rem",
              height: "140px",
            }}
          >
            {item.icon}
            <p
              style={{
                fontSize: "1rem",
                lineHeight: "1.2rem",
                textAlign: "center",
                margin: 0,
              }}
            >
              {item.title}
            </p>
          </List.Item>
        )}
      />
    </section>
  );
};

export default WatchCharacteristics;
