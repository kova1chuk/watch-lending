import React from "react";
import { List, Space } from "antd";

const characteristicContainer: React.CSSProperties = {
  backgroundImage: "url('/assets/img/background/blur.webp')",
  //   backgroundImage: "url('/assets/img/background/gradient-1.jpg')",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const glassStyle: React.CSSProperties = {
  background: "rgba(0, 0, 0, 0.27)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(0, 0, 0, 0.17)",
};

const characteristicItemStyle: React.CSSProperties = {
  //   padding: "16px",
  //   margin: "16px",
};

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
      grid={{
        gutter: 6,
        xs: 2,
        sm: 3,
        md: 3,
        lg: 3,
        xl: 6,
        xxl: 6,
      }}
      style={{ ...characteristicContainer }}
      renderItem={(item) => (
        <List.Item
          style={{
            ...glassStyle,
            ...characteristicItemStyle,
          }}
        >
          <Space
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
            <section>
              <Space direction="vertical">
                <div>{item.icon}</div>
                <p>{item.title}</p>
              </Space>
            </section>
          </Space>
        </List.Item>
      )}
    />
  );
};

export default WatchCharacteristics;
