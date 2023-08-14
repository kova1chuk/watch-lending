"use client";

import React from "react";
import { Col, Typography, List, Badge, Card } from "antd";

const { Title } = Typography;

const advantagesData = [
  {
    title: "Стиль",
    label: "Наш годинник – ваш неперевершений образ",
    description:
      "Ми пропонуємо стильні годинники, які відповідають вашому образу та відображають останні тренди.",
  },
  {
    title: "Ціна",
    label: "Купуйте найвигідніше",
    description:
      "Наші годинники доступні за приємними цінами, і ми надаємо великі знижки на оригінальну продукцію.",
  },
  {
    title: "Доставка",
    label: "Відправка до 17:00",
    description: "Швидка доставка.",
  },
  {
    title: "Гарантія якості",
    label: "Повернення протягом 14 днів",
    description:
      "Всі наші годинники мають гарантію від виробника та відповідають найвищим стандартам якості.",
  },
  {
    title: "Ексклюзивність",
    label: "Ексклюзив",
    description:
      "Унікальна модель годиннику, яку ви не знайдете в інших магазинах.",
  },
  {
    title: "Чому обрати нас",
    label: "Ви перед усе",
    description: [
      "Наші годинники виготовлені з високоякісних матеріалів і мають сучасний дизайн, додаючи елегантності вашому образу.",
      "Наші годинники гарантують точний показ часу для вашої зручності.",
      "Старайтеся виходити зі стандартів з нашими унікальними моделями годинників, яких не знайти в інших магазинах.",
      "Ми спеціально створили наш веб-сайт під цю модель, щоб забезпечити зручний процес замовлення.",
      "Ви можете бути впевнені, що наші годинники - оригінальні, і вони принесуть радість вам або вашим близьким.",
    ],
  },
];

const data = advantagesData;

interface Advantage {
  title: string;
  label: string;
  description: string | string[];
}

interface AdvantagesProps {}

const Advantages: React.FC<AdvantagesProps> = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <Title level={2}>Чому нас обирають:</Title>
      {data.map((advantage, index) => (
        <div key={index} style={{ margin: " 1rem" }}>
          <Badge.Ribbon
            text={advantage.label}
            color="black"
            style={{ padding: "0.1rem 1rem" }}
          >
            <Card
              title={advantage.title}
              size="small"
              // style={{ margin: "0 1rem" }}
            >
              {Array.isArray(advantage.description) ? (
                <List
                  size="small"
                  dataSource={advantage.description}
                  renderItem={(item: string) => <List.Item>{item}</List.Item>}
                />
              ) : (
                advantage.description
              )}
            </Card>
          </Badge.Ribbon>
          {/* <Col key={index} xs={24}>
            <div
              style={{
                // border: "1px solid #ccc",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <Title level={4} style={{ marginBottom: "10px" }}>
                {advantage.title}
              </Title>
              {Array.isArray(advantage.description) ? (
                <List
                  size="small"
                  dataSource={advantage.description}
                  renderItem={(item: string) => <List.Item>{item}</List.Item>}
                />
              ) : (
                <p style={{ marginBottom: "0" }}>{advantage.description}</p>
              )}
            </div>
          </Col> */}
        </div>
      ))}
    </div>
  );
};

export default Advantages;
