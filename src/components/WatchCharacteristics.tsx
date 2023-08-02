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
    icon: <ClockCircleOutlined height="3rem" />,
  },
  { title: "Стійкість до води", icon: <HeartOutlined height="5rem" /> },
  { title: "Швидка доставка", icon: <EnvironmentOutlined /> },
  { title: "Найкраща ціна", icon: <DollarCircleOutlined /> },
  { title: "Найвища якість", icon: <StarOutlined /> },
  { title: "Гарантія 12 міс", icon: <SyncOutlined /> },
];

const characteristicContainer: React.CSSProperties = {
  // backgroundImage: "url('/assets/img/background/blur.webp')",
  // //   backgroundImage: "url('/assets/img/background/gradient-1.jpg')",
  // backgroundPosition: "center",
  // backgroundSize: "cover",
  // backgroundRepeat: "no-repeat",
  padding: "1rem 0",
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
  //   padding: "16px",
  //   margin: "16px",
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
            }}
          >
            {/* <Space
              size="large"
              align="center"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "white",
                alignItems: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <section> */}
            <Space
              direction="vertical"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "white",
                alignItems: "center",
                margin: "1rem",
                // height: "100%",
                // width: "100%",
              }}
            >
              {/* <div> */}
              {item.icon}
              {/* </div> */}
              <p>{item.title}</p>
            </Space>
            {/* </section>
            </Space> */}
          </List.Item>
        )}
      />
      {/* </Space> */}
    </section>
  );
};

export default WatchCharacteristics;
