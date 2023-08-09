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
import data, { WatchesSlugs } from "@/data";

const WatchPage = ({ params }: { params: { slug: WatchesSlugs } }) => {
  const [isOrderModalOpen, setOrderIsModalOpen] = useState<boolean>(false);

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

  if (!params.slug || !data[params.slug]) return { notFound: true };

  const { main, advantages, otherProducts, reviews } = data[params.slug];

  return (
    <div style={{ overflowX: "hidden" }}>
      <main>
        <section style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <MainBannerCarousel
            mainImage={main.mainImage}
            backgroundBlurImage={main.backgroundBlurImage}
            topSlogan={main.topSlogan}
            mainColor={main.styles.mainColor}
            sale={main.sale}
            price={main.price}
          />
          <Chessboard advantagesData={advantages} />
          <Advantages />
          <OrderBlock
            handleCreateOrder={() => setOrderIsModalOpen(true)}
            mainProps={main}
          />
          <OrderModal
            isModalOpen={isOrderModalOpen}
            setIsModalOpen={setOrderIsModalOpen}
            productTitle={main.productTitle}
          />
          <section style={{ maxWidth: "800px", margin: "1.5rem auto" }}>
            <OtherProducts otherProducts={otherProducts} />
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
