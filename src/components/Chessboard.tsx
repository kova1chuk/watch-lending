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
    title: "Елегантний дизайн",
    description:
      "Годинник Cheetah Mars Black має унікальний та вишуканий дизайн, який гармонійно підходить до будь-якого образу, дозволяючи вам виділятися зі стилем.",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-3.jpg",
    title: "Надійний японський механізм Miyota",
    description:
      "Годинник обладнаний надійним кварцовим механізмом Miyota від японського виробника, що забезпечує точний хід годинника та його довговічність.",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-3.jpg",
    title: "Багатофункціональність",
    description:
      "Цей годинник пропонує різноманітні функції, включаючи хронограф, секундомір та відображення дати, що додає практичності до його вишуканого зовнішнього вигляду.",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-3.jpg",
    title: "Міцний корпус з нержавіючої сталі",
    description:
      "Круглий корпус із нержавіючої сталі не тільки підсилює загальний зовнішній вигляд годинника, але й забезпечує надійний захист внутрішніх компонентів.",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-3.jpg",
    title: "Водостійкий",
    description:
      "Годинник має водостійкість до 3 атмосфер (3 ATM), що дозволяє йому пережити миття рук та забезпечує його функціональність у повсякденних ситуаціях.",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-3.jpg",
    title: "Мінеральне скло з захистом від подряпин",
    description:
      "Годинник має мінеральне скло, яке допомагає захистити циферблат від подряпин, забезпечуючи чистоту та легкість зчитування інформації.",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-3.jpg",
    title: "Регульований сталевий ремінець",
    description:
      "Чорний сталевий ремінець з дворівневою застібкою забезпечує надійну та зручну посадку годинника на руку, а його довжина може бути налаштована для підходження до різних розмірів зап'ястя.",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-3.jpg",
    title: "Змінний ремінець",
    description:
      "Годинник поставляється з можливістю заміни ремінця, що дозволяє налаштовувати його зовнішній вигляд під різні події та обставини.",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-3.jpg",
    title: "Стрункі габарити",
    description:
      "З діаметром 42 мм та товщиною 12 мм, годинник має елегантний та помірний розмір, що підходить як чоловікам, так і жінкам.",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-3.jpg",
    title: "Гарантія на 12 місяців",
    description:
      "Годинник Cheetah Mars Black поставляється з гарантією на 12 місяців, що гарантує якість та надійність продукту та задоволення від його використання.",
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
