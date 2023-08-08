"use client";

import React, { useEffect, useState } from "react";

import Chessboard from "@/components/DescriptionChessboard";
import OrderBlock from "@/components/OrderBlock";
import Footer from "@/components/Footer";
import MainBannerCarousel from "@/components/MainBanner";
import Advantages from "@/components/Advantages";
import OrderModal from "@/components/OrderModal";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Space } from "antd";
import Meta from "antd/es/card/Meta";

import { advantagesData } from "./advantagesData";
import { MainProps } from "@/types";
import Link from "next/link";
import ReviewWidget from "@/components/ReviewWidget";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 800 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const mainProps: MainProps = {
  price: 3999,
  comparePrice: 4999,
  sale: 25,
  productTitle: "Carnival Milenium",
  topSlogan: "Нескінченна витонченість від Carnival.",
  styles: {
    mainColor: "#274F9C",
  },
};

const reviews = [
  {
    id: 1,
    rating: 5,
    reviewText:
      "Годинник Carnival Millenium - це втілення точності. Механізм працює на відмінно, а точний показ часу завжди важливий для мене. Дуже задоволений покупкою!",
  },
  {
    id: 2,
    rating: 4,
    reviewText:
      "Підкорився стильному дизайну і якості годинника. Виглядає елегантно та дорого, а вода йому не страшна. Раджу!",
  },
  {
    id: 3,
    rating: 5,
    reviewText:
      "Замовив годинник Carnival Millenium та був приємно вражений швидкою доставкою. Закладаючи його на руку, відчуваю найвищу якість!",
  },
  {
    id: 4,
    rating: 5,
    reviewText:
      "Неймовірна пропозиція - якість та ціна. Годинник виглядає дорого, але коштує відмінно. Все, що мені потрібно!",
  },
  {
    id: 5,
    rating: 4,
    reviewText:
      "Гарантія на 12 місяців додає впевненості у покупця. Годинник виглядає дуже стильно, але не відчувається таким надійним, як хотілося б.",
  },
  {
    id: 6,
    rating: 5,
    reviewText:
      "Прекрасний вибір для тих, хто цінує класичний дизайн та високу якість. Ремінець можна легко налаштувати під розмір зап'ястя, що дуже зручно.",
  },
  {
    id: 7,
    rating: 5,
    reviewText:
      "Годинник Carnival Millenium - це справжня витонченість. Японський механізм дарує точність, а стальний корпус - надійність.",
  },
  {
    id: 8,
    rating: 4,
    reviewText:
      "Швидка доставка - це завжди приємно. Годинник дійсно виглядає дорого і стильно. Тільки хотілося б трохи більше функціональності.",
  },
  {
    id: 9,
    rating: 5,
    reviewText:
      "Годинник з найкращою ціною та найвищою якістю - це те, що мені потрібно було. Рекомендую всім, хто цінує якість і стиль.",
  },
  {
    id: 10,
    rating: 4,
    reviewText:
      "Годинник Carnival Millenium точно відповідає опису. Ремінець дійсно зручний, але хотілося б, щоб було більше варіантів заміни.",
  },
];

const WatchPage = () => {
  const [isOrderModalOpen, setOrderIsModalOpen] = useState(false);

  useEffect(() => {
    // ping bot
    const webhookUrl = `${process.env.NEXT_PUBLIC_TG_BOT_URL}`; // Replace with your webhook URL
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
            mainImage="/assets/img/carnival-millenium/carnival-millenium-4.webp"
            backgroundBlurImage="/assets/img/carnival-millenium/background-blur.webp"
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
            <Carousel responsive={responsive}>
              <Space style={{}}>
                <Link href="/watches/carnival-millenium">
                  <Card
                    hoverable
                    style={{}}
                    cover={
                      <img
                        alt="example"
                        src="https://best-time.biz/image/cache/catalog/02-03-2018/25-08/forsiningwalkersteel5q-590x590.jpg"
                      />
                    }
                  >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                </Link>
                <Link href="/watches/cheetah">
                  <Card
                    hoverable
                    style={{}}
                    cover={
                      <img
                        alt="example"
                        src="https://best-time.biz/image/cache/catalog/01-02/23-01/carnivalmillenium9a-590x590.jpg"
                      />
                    }
                  >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                </Link>
              </Space>
              {/* <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://best-time.biz/image/cache/catalog/01-04-2019/29-04/paganidesignzurick10bar5a-590x590.jpg"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://best-time.biz/image/cache/catalog/01-04-2019/29-04/benyarautomatic10bar1-590x590.jpg"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://best-time.biz/image/cache/catalog/01-06-2017/03-08/1627748870210-590x590.jpg"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card> */}
            </Carousel>
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
