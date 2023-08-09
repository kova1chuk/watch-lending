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
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

import { advantagesData } from "./data";
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
  price: 1799,
  comparePrice: 2999,
  sale: 35,
  productTitle: "Cheetah Black",
  topSlogan: "Нескінченна витонченість від Carnival.",
  styles: {
    mainColor: "black",
  },
};

const reviews = [
  {
    id: 1,
    rating: 5,
    reviewText:
      "Годинник Cheetah Mars Black - це справжній шедевр. Точний механізм дарує впевненість у правильному показі часу. Це дійсно якісний годинник за приємною ціною.",
  },
  {
    id: 2,
    rating: 4,
    reviewText:
      "Висока якість та елегантний дизайн - ось, що відзначає годинник Cheetah Mars Black. Надійний японський механізм додає надійності.",
  },
  {
    id: 3,
    rating: 5,
    reviewText:
      "Годинник ідеально підходить для практичних людей, які цінують багатофункціональність. Хронограф, секундомір та відображення дати - все що треба!",
  },
  {
    id: 4,
    rating: 5,
    reviewText:
      "Міцний корпус з нержавіючої сталі та водостійкість - ось надійний захист цього годинника. Дизайн також приємно вражає!",
  },
  {
    id: 5,
    rating: 4,
    reviewText:
      "Мінеральне скло з захистом від подряпин - дуже важлива деталь для мене. Ремінець зручний, але було б чудово мати більше варіантів заміни.",
  },
  {
    id: 6,
    rating: 5,
    reviewText:
      "Регульований сталевий ремінець забезпечує ідеальну посадку. Компактні габарити роблять його зручним для щоденного носіння.",
  },
  {
    id: 7,
    rating: 5,
    reviewText:
      "Завдяки можливості заміни ремінця, годинник завжди можна адаптувати під будь-яку подію. Я задоволений покупкою.",
  },
  {
    id: 8,
    rating: 4,
    reviewText:
      "Гарантія на 12 місяців - це додатковий аргумент у вигляді надійності. Годинник точний та стильний, але могло б бути трохи більше функціональності.",
  },
  {
    id: 9,
    rating: 5,
    reviewText:
      "Годинник Cheetah Mars Black - мій вибір через його стиль та якість. Японський механізм - це гарантія правильного ходу.",
  },
  {
    id: 10,
    rating: 4,
    reviewText:
      "Чудовий годинник зі змінним ремінцем, що дозволяє змінювати зовнішній вигляд. Я задоволений, але розмір трохи великий для жінок.",
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
            mainImage="/assets/img/cheetah-mars-black/cheetah-mars-black 2.webp"
            backgroundBlurImage="/assets/img/background/blur.webp"
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
                  style={{ width: 240 }}
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
