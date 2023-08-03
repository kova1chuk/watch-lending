import { Carousel } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Scada } from "next/font/google";
import TopBannerCarousel from "./TopBannerCarousel";
import WatchCharacteristics from "./WatchCharacteristics";

const scada = Scada({
  weight: "400",
  subsets: ["cyrillic-ext", "latin-ext"],
});

// import "antd/dist/antd.css"; // Import the Ant Design CSS

const contentStyle: React.CSSProperties = {
  maxHeight: "500px",
  color: "#fff",
  //   lineHeight: "300px",
  textAlign: "center",
  background: "#364d79",
  //   margin: "0 20px",
};

const bannerContainer: React.CSSProperties = {
  backgroundImage: "url('/assets/img/background/blur.webp')",
  //   backgroundImage: "url('/assets/img/background/gradient-1.webp')",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

interface Props {}

const MainBannerCarousel: React.FC<Props> = () => {
  const [autoplay, setAutopalay] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [divWidth, setDivWidth] = useState(0);
  const [divHeight, setDivHeight] = useState(0);

  const handleSlideChange = (current: number) => {
    if (current === 1) {
      // Assuming second slide index is 1
      playVideo();
    } else {
      pauseVideo();
    }
  };

  const playVideo = () => {
    if (videoRef.current) {
      setAutopalay(false);
      videoRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      setAutopalay(true);
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const newWidth = document?.getElementById("banner-carousel")?.offsetWidth;

      if (newWidth) {
        // Calculate desired height based on width (e.g., maintain aspect ratio)
        const newHeight = newWidth * 0.7; // Adjust the ratio as needed

        setDivWidth(newWidth);
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
      <Carousel
        effect="fade"
        afterChange={handleSlideChange}
        autoplay={autoplay}
      >
        <div>
          <div style={{ ...contentStyle, height: divHeight }}>
            <Image
              src="/assets/img/cheetah-mars-black/cheetah-mars-black 2.webp" // Path to the image inside the "public" folder
              alt="Example Image"
              //   style={{
              //     objectFit: "cover", // Make the image cover the container while maintaining aspect ratio
              //     objectPosition: "center", // Center the image within the container
              //   }}
              //   fill={true} // Fill the parent container
              //   priority // Optional: Load the image with priority
              layout="fill" // Fill the parent container
              objectFit="cover" // Make the image cover the container while maintaining aspect ratio
              objectPosition="center" // Center the image within the container
              priority
            />
          </div>
        </div>

        {/* <div>
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
        </div> */}
      </Carousel>
      <WatchCharacteristics />
    </div>
  );
};

export default MainBannerCarousel;
