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
  height: "500px",
  color: "#fff",
  //   lineHeight: "300px",
  textAlign: "center",
  background: "#364d79",
  //   margin: "0 20px",
};

const bannerContainer: React.CSSProperties = {
  backgroundImage: "url('/assets/img/background/blur.webp')",
  //   backgroundImage: "url('/assets/img/background/gradient-1.jpg')",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

interface Props {}

const MainBannerCarousel: React.FC<Props> = () => {
  const [autoplay, setAutopalay] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

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

  return (
    <div style={{ ...bannerContainer }}>
      <TopBannerCarousel />
      <Carousel
        effect="fade"
        afterChange={handleSlideChange}
        autoplay={autoplay}
      >
        <div>
          <div style={{ ...contentStyle }}>
            {/* <h2
            className={scada.className}
            style={{
              zIndex: 100,
              position: "relative",
              color: "white",
              backgroundColor: "black",
              display: "inline",
              padding: "12px",
              border: "1px solid white",
              borderRadius: "6px",
              top: "150px",
            }}
          >
            Вічна елегантність у кожному моменті - годинники Carnival Black
          </h2> */}
            {/* <p>Знижка: 20%</p>
      <button>Купуй зараз</button> */}
            <Image
              src="/assets/img/cheetah-mars-black/cheetah-mars-black 2.jpeg" // Path to the image inside the "public" folder
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
        <div>
          <div style={{ ...contentStyle }}>
            {/* <h2>Watch 2</h2>
      <p>Discount: 30%</p>
      <button>Buy Now</button> */}
            {/* <Image
              src="/assets/img/cheetah-mars-black/cheetah-mars-black 2.jpeg" // Path to the image inside the "public" folder
              alt="Example Image"
              layout="fill" // Fill the parent container
              objectFit="cover" // Make the image cover the container while maintaining aspect ratio
              objectPosition="center" // Center the image within the container
              priority // Optional: Load the image with priority
            /> */}
            <video
              controls
              ref={videoRef}
              autoPlay
              muted
              style={{
                // layout: "fill", // Fill the parent container
                objectFit: "cover", // Make the image cover the container while maintaining aspect ratio
                objectPosition: "center",
                width: "100%",
              }}
            >
              <source
                src="/assets/video/cheetah-mars-black/videoplayback.mp4"
                type="video/mp4"
              />
              {/* Add additional source elements if needed */}
              {/* <source src="/path-to-other-format" type="video/other-format" /> */}
              Your browser does not support the video tag.
            </video>
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
