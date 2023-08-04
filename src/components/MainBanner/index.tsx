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
  const [divHeight, setDivHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = document?.getElementById("banner-carousel")?.offsetWidth;

      if (newWidth) {
        // Calculate desired height based on width (e.g., maintain aspect ratio)
        const newHeight = newWidth * 0.5; // Adjust the ratio as needed

        // setDivWidth(newWidth);
        setDivHeight(newHeight);
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
