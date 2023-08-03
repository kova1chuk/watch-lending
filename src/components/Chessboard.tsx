import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Row, Col, Divider, Collapse } from "antd";

interface AdvantageData {
  image: string;
  title: string;
  description: string;
}

const advantagesData: AdvantageData[] = [
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-7.webp",
    title: "Елегантний дизайн",
    description:
      "Годинник Cheetah Mars Black має унікальний та вишуканий дизайн, який гармонійно підходить до будь-якого образу, дозволяючи вам виділятися зі стилем.",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-8.webp",
    title: "Надійний японський механізм Miyota",
    description:
      "Годинник обладнаний надійним кварцовим механізмом Miyota від японського виробника, що забезпечує точний хід годинника та його довговічність.",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-9.webp",
    title: "Багатофункціональність",
    description:
      "Цей годинник пропонує різноманітні функції, включаючи хронограф, секундомір та відображення дати, що додає практичності до його вишуканого зовнішнього вигляду.",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-3.webp",
    title: "Міцний корпус з нержавіючої сталі",
    description:
      "Круглий корпус із нержавіючої сталі не тільки підсилює загальний зовнішній вигляд годинника, але й забезпечує надійний захист внутрішніх компонентів.",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-6.webp",
    title: "Водостійкий",
    description:
      "Годинник має водостійкість до 3 атмосфер (3 ATM), що дозволяє йому пережити миття рук та забезпечує його функціональність у повсякденних ситуаціях.",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-4.webp",
    title: "Мінеральне скло з захистом від подряпин",
    description:
      "Годинник має мінеральне скло, яке допомагає захистити циферблат від подряпин, забезпечуючи чистоту та легкість зчитування інформації.",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-5.webp",
    title: "Регульований сталевий ремінець",
    description:
      "Чорний сталевий ремінець з дворівневою застібкою забезпечує надійну та зручну посадку годинника на руку, а його довжина може бути налаштована для підходження до різних розмірів зап'ястя.",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-10.webp",
    title: "Змінний ремінець",
    description:
      "Годинник поставляється з можливістю заміни ремінця, що дозволяє налаштовувати його зовнішній вигляд під різні події та обставини.",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-11.webp",
    title: "Стрункі габарити",
    description:
      "З діаметром 42 мм та товщиною 12 мм, годинник має елегантний та помірний розмір, що підходить як чоловікам, так і жінкам.",
  },
  {
    image: "/assets/img/cheetah-mars-black/cheetah-mars-black-12.webp",
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
      <div
        style={{
          // border: "1px solid #ccc",
          padding: "0 20px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          // textAlign: "center",
        }}
      >
        <h4
          style={{
            fontSize: "1.2rem",
            lineHeight: "1.6rem",
            fontStyle: "bold",
          }}
        >
          {advantage.title}
        </h4>
        <Divider
          style={{
            marginTop: "0.6rem",
            marginBottom: "1rem",
          }}
        />
        <p
          style={{ marginBottom: "0", fontSize: "1rem", lineHeight: "1.3rem" }}
        >
          {advantage.description}
        </p>
      </div>
    </Col>
  );
};

const ImageBox: React.FC<{ advantage: AdvantageData }> = ({ advantage }) => {
  return (
    <Col xs={24} sm={12}>
      <div style={{ padding: "0 20px" }}>
        <Image
          src={advantage.image}
          alt={advantage.title}
          style={{ borderRadius: "1.5rem" }}
          width={400} // Adjust the width of the image as per your requirements
          height={300} // Adjust the height of the image as per your requirements
          layout="responsive" // Use responsive layout to maintain aspect ratio
        />
      </div>
    </Col>
  );
};

const Chessboard = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  // Update the isMobileView state on window resize
  const handleWindowResize = () => {
    setIsMobileView(window.innerWidth < 555);
  };

  useEffect(() => {
    handleWindowResize(); // Check the initial width
    window.addEventListener("resize", handleWindowResize);
    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto" }}>
      {advantagesData.map((advantage, index) =>
        !isMobileView ? (
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
        ) : (
          <>
            <Collapse
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
                          fontStyle: "bold",
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
        )
      )}
    </div>
  );
};

export default Chessboard;
