import React from "react";
import { Col, Typography, List } from "antd";

const { Title } = Typography;

const advantagesData = [
  {
    title: "Стиль",
    description:
      "Ми пропонуємо стильні годинники, які відповідають вашому образу та відображають останні тренди.",
  },
  {
    title: "Ціна",
    description:
      "Наші годинники доступні за приємними цінами, і ми надаємо великі знижки на оригінальну продукцію.",
  },
  {
    title: "Доставка",
    description: "Безкоштовна доставка.",
  },
  {
    title: "Гарантія якості",
    description:
      "Всі наші годинники мають гарантію від виробника та відповідають найвищим стандартам якості.",
  },
  {
    title: "Ексклюзивність",
    description:
      "Унікальна модель годиннику, яку ви не знайдете в інших магазинах.",
  },
  {
    title: "Чому обрати нас",
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
  description: string | string[];
}

interface AdvantagesProps {}

const Advantages: React.FC<AdvantagesProps> = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      {data.map((advantage, index) => (
        <Col key={index} xs={24}>
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
        </Col>
      ))}
    </div>
  );
};

export default Advantages;
