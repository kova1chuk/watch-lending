"use client";

import React from "react";
import Head from "next/head";
import { Button, Carousel, Space } from "antd";
import Chessboard from "@/components/Chessboard";
import PriceBlock from "@/components/PriceBlock";
import ShippingAdvantages from "@/components/ShippingAdvantages";

import WatchCharacteristics from "@/components/WatchCharacteristics";
import NovaPoshtaAreasContainer from "@/containers/NovaPoshtaAreasContainer";
import Footer from "@/components/Footer";
import TopBannerCarousel from "@/components/TopBannerCarousel";
import MainBannerCarousel from "@/components/MainBannerCarousel";
import Advantages from "@/components/Advantages";
import LocationInfo from "@/components/LocationInfo";

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

  return (
    <div style={{ overflowX: "hidden" }}>
      <main>
        <section>
          <MainBannerCarousel />
          <Chessboard />
          {/* <ShippingAdvantages
            shippingInfo={shippingInfo}
            advantages={advantagesData}
          /> */}
          <Advantages />
          <PriceBlock />
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
        <LocationInfo />
      </main>
      <Footer />
      {/* Add your footer and other common elements here */}
    </div>
  );
};

export default WatchPage;
