"use client";

import React from "react";
import { Button, Row, Space } from "antd";

import Chessboard from "@/components/Chessboard";
import PriceBlock from "@/components/PriceBlock";
import NovaPoshtaAreasContainer from "@/containers/NovaPoshtaAreasContainer";
import Footer from "@/components/Footer";
import MainBannerCarousel from "@/components/MainBannerCarousel";
import Advantages from "@/components/Advantages";
import LocationInfo from "@/components/LocationInfo";

const WatchPage = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <main>
        <section>
          <MainBannerCarousel />
          <Chessboard />
          <Advantages />
          <PriceBlock />
          {/* <div
            style={{
              margin: "0 auto",
              width: "800px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          > */}{" "}
          <Row justify="center">
            <Space.Compact>
              <Button type="primary" size="large">
                Новапошта
              </Button>
              <Button type="primary" size="large">
                Укрпошта
              </Button>
            </Space.Compact>
          </Row>
          {/* </div> */}
          <NovaPoshtaAreasContainer
            onSettlementSelected={function (settlementRef: string): void {
              throw new Error("Function onSettlementSelected not implemented.");
            }}
          />
        </section>
        <LocationInfo />
      </main>
      <Footer />
    </div>
  );
};

export default WatchPage;
