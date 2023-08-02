import { Carousel } from "antd";
import React from "react";
import Image from "next/image";

interface Props {}

const TopBannerCarousel: React.FC<Props> = () => {
  return (
    <Carousel effect="fade">
      <div>
        <div
          style={{
            // backgroundColor: "black",
            // paddingTop: "10px",
            height: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // borderBottom: "1px solid white",
          }}
        >
          <Image
            src="/assets/img/svg/common/logo.svg"
            alt={"Нова пошта логотип"}
            width={24}
            height={24}
            style={{
              margin: "0 1rem",
            }}
          />
          <p
            style={{
              textAlign: "center",
              fontStyle: "bold",
              color: "white",
              margin: "0 1rem",
            }}
          >
            Вічна елегантність у кожному моменті - годинники Carnival Black
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default TopBannerCarousel;
