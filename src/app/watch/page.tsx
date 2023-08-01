"use client";

import React from "react";
import Head from "next/head";
import { Button, Carousel, Space } from "antd";
import Chessboard from "@/components/Chessboard";
import PriceBlock from "@/components/PriceBlock";
import ShippingAdvantages from "@/components/ShippingAdvantages";

import WatchCharacteristics from "@/components/WatchCharacteristics";
import Image from "next/image";
import { Scada } from "next/font/google";
import NovaPoshtaAreasContainer from "@/containers/NovaPoshtaAreasContainer";
import Footer from "@/components/Footer";

const scada = Scada({
  weight: "400",
  subsets: ["cyrillic-ext", "latin-ext"],
});

// import "antd/dist/antd.css"; // Import the Ant Design CSS

const contentStyle: React.CSSProperties = {
  height: "500px",
  color: "#fff",
  //   lineHeight: "300px",
  textAlign: "center",
  background: "#364d79",
  //   margin: "0 20px",
};

const WatchPage = () => {
  const shippingInfo =
    "Безкоштовна доставка в межах країни при замовленні на суму понад $100.";
  const advantagesData = [
    {
      title: "Широкий асортимент",
      description:
        "Ми пропонуємо великий вибір стильних і надійних годинників різних брендів.",
    },
    {
      title: "Безкоштовна доставка",
      description:
        "Безкоштовна доставка в межах країни при замовленні на суму понад $100.",
    },
    {
      title: "Якість гарантовано",
      description:
        "Всі наші годинники мають гарантію від виробника та відповідають найвищим стандартам якості.",
    },
    {
      title: "Ексклюзивні моделі",
      description:
        "У нас є унікальні моделі годинників, які ви не знайдете в інших магазинах.",
    },
    {
      title: "Професійні консультанти",
      description:
        "Наші фахівці завжди готові допомогти вам з вибором і підібрати ідеальний годинник.",
    },
  ];

  const price = {
    currency: "USD",
    amount: 199.99,
  };
  return (
    <div>
      <main>
        {/* Add your landing page content here */}
        <section>
          {/* <h1>Best Sales for Watches</h1> */}
          <Carousel effect="fade">
            <div>
              <div style={{ ...contentStyle, background: "#1890ff" }}>
                <h2
                  className={scada.className}
                  style={{
                    zIndex: 100,
                    position: "relative",
                    color: "white",
                    backgroundColor: "black",
                    display: "inline",
                    padding: "12px",
                    border: "1px solid white",
                    borderRadius: "6px",
                    top: "150px",
                  }}
                >
                  Вічна елегантність у кожному моменті - годинники Carnival
                  Black
                </h2>
                <p>Знижка: 20%</p>
                <button>Купуй зараз</button>
                <Image
                  src="/assets/img/cheetah-mars-black/cheetah-mars-black 2.jpeg" // Path to the image inside the "public" folder
                  alt="Example Image"
                  //   style={{
                  //     objectFit: "cover", // Make the image cover the container while maintaining aspect ratio
                  //     objectPosition: "center", // Center the image within the container
                  //   }}
                  //   fill={true} // Fill the parent container
                  //   priority // Optional: Load the image with priority
                  layout="fill" // Fill the parent container
                  objectFit="cover" // Make the image cover the container while maintaining aspect ratio
                  objectPosition="center" // Center the image within the container
                  priority
                />
              </div>
            </div>
            <div>
              <div style={{ ...contentStyle, background: "#52c41a" }}>
                {/* <h2>Watch 2</h2>
                <p>Discount: 30%</p>
                <button>Buy Now</button> */}
                <Image
                  src="/assets/img/cheetah-mars-black/cheetah-mars-black 2.jpeg" // Path to the image inside the "public" folder
                  alt="Example Image"
                  layout="fill" // Fill the parent container
                  objectFit="cover" // Make the image cover the container while maintaining aspect ratio
                  objectPosition="center" // Center the image within the container
                  priority // Optional: Load the image with priority
                />
              </div>
            </div>
            <div>
              <div style={{ ...contentStyle, background: "#fadb14" }}>
                {/* <h2>Watch 3</h2>
                <p>Discount: 15%</p>
                <button>Buy Now</button> */}
              </div>
            </div>
            <div>
              <div style={{ ...contentStyle, background: "#ff4d4f" }}>
                {/* <h2>Watch 4</h2>
                <p>Discount: 25%</p>
                <button>Buy Now</button> */}
              </div>
            </div>
          </Carousel>{" "}
          <WatchCharacteristics />
          <Chessboard />{" "}
          <section style={{ margin: "40px 0" }}>
            <ShippingAdvantages
              shippingInfo={shippingInfo}
              advantages={advantagesData}
            />
          </section>
          <section style={{ margin: "40px 0" }}>
            <h2>Ціна продукту</h2>
            <PriceBlock currency={price.currency} amount={price.amount} />
          </section>
          <Space.Compact block>
            <Button type="primary" size="large">
              Новапошта
            </Button>
            <Button type="primary" size="large">
              Укрпошта
            </Button>
          </Space.Compact>{" "}
          <NovaPoshtaAreasContainer
            onSettlementSelected={function (settlementRef: string): void {
              throw new Error("Function onSettlementSelected not implemented.");
            }}
          />
        </section>
      </main>{" "}
      <Footer />
      {/* Add your footer and other common elements here */}
    </div>
  );
};

export default WatchPage;
