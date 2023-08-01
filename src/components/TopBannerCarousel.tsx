import { Carousel } from "antd";
import React from "react";

interface Props {}

const TopBannerCarousel: React.FC<Props> = () => {
  return (
    <Carousel effect="fade">
      <div>
        <div
          style={{
            // backgroundColor: "black",
            // paddingTop: "10px",
            height: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // borderBottom: "1px solid white",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontStyle: "bold",
              color: "white",
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
