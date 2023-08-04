import { Carousel } from "antd";
import React from "react";
import Image from "next/image";

interface Props {}

const TopBannerCarousel: React.FC<Props> = () => {
  return (
    // <Carousel effect="fade">
    <div>
      <div
        style={{
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/assets/img/svg/common/logo.svg"
          alt={"Логотип"}
          width={24}
          height={24}
          style={{
            margin: "0 0.7rem",
            position: "absolute",
            left: "0",
          }}
        />
        <p
          style={{
            textAlign: "center",
            fontStyle: "bold",
            color: "white",
            margin: "0 2rem",
          }}
        >
          Вічна елегантність у кожному моменті -<br />
          годинник Сheetah Elegent
        </p>
      </div>
    </div>
    // </Carousel>
  );
};

export default TopBannerCarousel;
