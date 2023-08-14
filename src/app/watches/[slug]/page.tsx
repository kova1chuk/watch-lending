"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import data, { WatchesSlugs } from "@/data";

const MainBanner = dynamic(() => import("@/components/MainBanner"), {
  loading: () => <p>Loading...</p>,
});
const DescriptionChessboard = dynamic(
  () => import("@/components/DescriptionChessboard"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Advantages = dynamic(() => import("@/components/Advantages"), {
  loading: () => <p>Loading...</p>,
});
const OrderBlock = dynamic(() => import("@/components/OrderBlock"), {
  loading: () => <p>Loading...</p>,
});
const OrderModal = dynamic(() => import("@/components/OrderModal"), {
  loading: () => <p>Loading...</p>,
});
const OtherProducts = dynamic(() => import("@/components/OtherProducts"), {
  loading: () => <p>Loading...</p>,
});
const ReviewWidget = dynamic(() => import("@/components/ReviewWidget"), {
  loading: () => <p>Loading...</p>,
});
const Footer = dynamic(async () => (await import("@/components")).Footer, {
  loading: () => <p>Loading...</p>,
});

// eslint-disable-next-line react-hooks/exhaustive-deps
const sendVisitData = async () => {
  const webhookUrl = `${process.env.NEXT_PUBLIC_TG_BOT_URL}/visit`; // Replace with your webhook URL

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("Visit details sent to Telegram bot:", data);
  } catch (error) {
    sendVisitData();
    console.error("Error sending visit details:", error);
  }
};

const WatchPage = ({ params }: { params: { slug: WatchesSlugs } }) => {
  const [isOrderModalOpen, setOrderIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // const data = await import('fuse.js')
    sendVisitData();
  }, []);

  if (!params.slug || !data[params.slug]) return { notFound: true };

  const { main, advantages, otherProducts, reviews } = data[params.slug];

  return (
    <div style={{ overflowX: "hidden" }}>
      <main>
        <section style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <MainBanner
            mainImage={main.mainImage}
            backgroundBlurImage={main.backgroundBlurImage}
            topSlogan={main.topSlogan}
            mainColor={main.styles.mainColor}
            sale={main.sale}
            price={main.price}
          />
          <DescriptionChessboard advantagesData={advantages} />
          <Advantages />
          <OrderBlock
            handleCreateOrder={() => setOrderIsModalOpen(true)}
            mainProps={main}
          />
          <OrderModal
            isModalOpen={isOrderModalOpen}
            setIsModalOpen={setOrderIsModalOpen}
            productTitle={main.productTitle}
            productPrice={main.price}
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
