import React from "react";
import Head from "next/head";
import { Carousel } from "antd";
import Chessboard from "@/components/Chessboard";
import PriceBlock from "@/components/PriceBlock";
import ShippingAdvantages from "@/components/ShippingAdvantages";
import {
  ClockCircleOutlined,
  HeartOutlined,
  EnvironmentOutlined,
  DollarCircleOutlined,
  StarOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import WatchCharacteristics from "@/components/WatchCharacteristics";
import Image from "next/image";

// import "antd/dist/antd.css"; // Import the Ant Design CSS

const contentStyle: React.CSSProperties = {
  height: "100hv",
  color: "#fff",
  lineHeight: "300px",
  textAlign: "center",
  background: "#364d79",
};

const WatchPage = () => {
  const characteristics = [
    { title: "Точний механізм", icon: <ClockCircleOutlined /> },
    { title: "Стійкість до води", icon: <HeartOutlined /> },
    { title: "Глобальна доставка", icon: <EnvironmentOutlined /> },
    { title: "Конкурентні ціни", icon: <DollarCircleOutlined /> },
    { title: "Висока якість", icon: <StarOutlined /> },
    { title: "Гарантія", icon: <SyncOutlined /> },
  ];

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
      <Head>
        <title>Watch Product | My Watch Landing Page</title>
        {/* Add any other meta tags, CSS or external scripts you may need */}
      </Head>
      <main>
        {/* Add your landing page content here */}
        <section>
          {/* <h1>Best Sales for Watches</h1> */}
          <Carousel effect="fade">
            <div>
              <div style={{ ...contentStyle, background: "#1890ff" }}>
                <h2>Watch 1</h2>
                <p>Discount: 20%</p>
                <button>Buy Now</button>
                <Image
                  src="/assets/img/cheetah-mars-black/cheetah-mars-black.jpeg" // Path to the image inside the "public" folder
                  alt="Example Image"
                  layout="fill" // Fill the parent container
                  objectFit="cover" // Make the image cover the container while maintaining aspect ratio
                  objectPosition="center" // Center the image within the container
                  priority // Optional: Load the image with priority
                />
              </div>
            </div>
            <div>
              <div style={{ ...contentStyle, background: "#52c41a" }}>
                <h2>Watch 2</h2>
                <p>Discount: 30%</p>
                <button>Buy Now</button>
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
                <h2>Watch 3</h2>
                <p>Discount: 15%</p>
                <button>Buy Now</button>
              </div>
            </div>
            <div>
              <div style={{ ...contentStyle, background: "#ff4d4f" }}>
                <h2>Watch 4</h2>
                <p>Discount: 25%</p>
                <button>Buy Now</button>
              </div>
            </div>
          </Carousel>{" "}
          <section style={{ margin: "40px 0" }}>
            <h2>Характеристики годинника</h2>
            <WatchCharacteristics characteristics={characteristics} />
          </section>
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
        </section>
      </main>
      {/* Add your footer and other common elements here */}
    </div>
  );
};

export default WatchPage;
