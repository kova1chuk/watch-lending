import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Rate, Button } from "antd";
import * as Scroll from "react-scroll";

var scroll = Scroll.animateScroll;

const contentStyle: React.CSSProperties = {
  maxHeight: "480px",
  height: "fit-content",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

const glassStyle: React.CSSProperties = {
  background: "rgba(0, 0, 0, 0.27)",
  borderRadius: "0 0 0 16px",
  boxShadow: "0 4px 30px rgba(255, 255, 255, 0.1), 0.1)",
  backdropFilter: "blur(8px)",
  borderBottom: "1px solid rgba(201, 201, 201, 0.17)",
  borderLeft: "1px solid rgba(201, 201, 201, 0.17)",
};

const buttonGlassStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.55)",
  borderRadius: "0.5rem",
  boxShadow: "0 4px 30px rgba(255, 255, 255, 0.1), 0.1)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(201, 201, 201, 0.30)",
  textShadow:
    "2px 2px 4px rgba(0, 0, 0, 0.7)" /* Horizontal offset, vertical offset, blur radius, shadow color */,
};

interface BannerProps {
  imageUrl: string;
  discount: string;
  buttonText: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, discount, buttonText }) => {
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
    <div>
      <div
        style={{
          ...contentStyle,
          height: divHeight,
          position: "relative",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          padding: "1rem",
        }}
      >
        <Image
          src={imageUrl}
          alt="Example Image"
          style={{
            objectFit: "cover",
          }}
          fill={true}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            padding: "1rem",
            ...glassStyle,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "3rem",
              color: "white",
            }}
          >
            {discount}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Rate disabled value={5} />
          <Button
            type="primary"
            size="large"
            style={{
              ...buttonGlassStyle,
              color: "white",
            }}
            onClick={() => scroll.scrollToBottom()}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
