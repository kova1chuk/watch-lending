"use client";

import React, { useEffect, useState } from "react";

import {
  MainBannerCarousel,
  Chessboard,
  Advantages,
  OrderBlock,
  OrderModal,
  OtherProducts,
  ReviewWidget,
  Footer,
} from "@/components";

import { advantagesData, mainProps, otherProductsData, reviews } from "./data";

const WatchPage = () => {
  const [isOrderModalOpen, setOrderIsModalOpen] = useState(false);

  useEffect(() => {
    // ping bot
    const webhookUrl = `${process.env.NEXT_PUBLIC_TG_BOT_URL}`;
    fetch(webhookUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <main>
        <section style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <MainBannerCarousel
            mainImage={mainProps.mainImage}
            backgroundBlurImage={mainProps.backgroundBlurImage}
            topSlogan={mainProps.topSlogan}
            mainColor={mainProps.styles.mainColor}
            sale={mainProps.sale}
            price={mainProps.price}
          />
          <Chessboard advantagesData={advantagesData} />
          <Advantages />
          <OrderBlock
            handleCreateOrder={() => setOrderIsModalOpen(true)}
            mainProps={mainProps}
          />
          <OrderModal
            isModalOpen={isOrderModalOpen}
            setIsModalOpen={setOrderIsModalOpen}
            productTitle={mainProps.productTitle}
          />
          <section style={{ maxWidth: "800px", margin: "1.5rem auto" }}>
            <OtherProducts otherProducts={otherProductsData} />
          </section>
          <section style={{ maxWidth: "800px", margin: "1rem auto" }}>
            <ReviewWidget
              onSubmit={() => console.log("Submit review")}
              reviews={reviews}
            />
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WatchPage;
