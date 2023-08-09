import { Button, Carousel, Rate } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Scada } from "next/font/google";

import TopBannerCarousel from "./TopBannerCarousel";
import WatchCharacteristics from "./WatchCharacteristics";
import Banner from "./Banner";

interface Props {
  mainImage: string;
  backgroundBlurImage: string;
  topSlogan: string;
  mainColor: string;
  sale: number;
  price: number;
}

const MainBannerCarousel: React.FC<Props> = ({
  mainImage,
  backgroundBlurImage,
  topSlogan,
  mainColor,
  sale,
  price,
}) => {
  const bannerContainer: React.CSSProperties = {
    // backgroundImage: "url('/assets/img/background/blur.webp')",
    backgroundImage: `url(${backgroundBlurImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div id="banner-carousel" style={{ ...bannerContainer }}>
      <TopBannerCarousel slogan={topSlogan} mainColor={mainColor} />
      <Banner
        imageUrl={mainImage}
        discount={`${sale}%`}
        buttonText="Хочу Замовити"
      />
      <WatchCharacteristics />
    </div>
  );
};

export default MainBannerCarousel;
