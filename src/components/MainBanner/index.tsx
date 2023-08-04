import { Button, Carousel, Rate } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import TopBannerCarousel from "./TopBannerCarousel";
import WatchCharacteristics from "./WatchCharacteristics";
import { Scada } from "next/font/google";
import Banner from "./Banner";

const bannerContainer: React.CSSProperties = {
  backgroundImage: "url('/assets/img/background/blur.webp')",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

interface Props {}

const MainBannerCarousel: React.FC<Props> = () => {
  return (
    <div id="banner-carousel" style={{ ...bannerContainer }}>
      <TopBannerCarousel />
      <Banner
        imageUrl="/assets/img/cheetah-mars-black/cheetah-mars-black 2.webp"
        discount="-35%"
        buttonText="Хочу Замовити"
      />
      <WatchCharacteristics />
    </div>
  );
};

export default MainBannerCarousel;
