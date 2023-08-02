"use client";

import React from "react";
import Image from "next/image";
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

          <Row justify="center">
            <Space.Compact>
              <Button
                type="default"
                size="large"
                style={{
                  color: "#CA3B2B",
                  fontStyle: "bold",
                  lineHeight: "24px",
                  fontSize: "20px",
                  borderColor: "#CA3B2B",
                  display: "flex",
                  justifyContent: "center",
                }}
                icon={
                  <Image
                    src="/assets/img/svg/common/NovaPoshtaLogo.svg"
                    alt={"Нова пошта логотип"}
                    width={24}
                    height={24}
                  />
                }
              >
                Нова пошта
              </Button>
              <Button
                type="default"
                size="large"
                style={{
                  // color: "#F5C258",
                  fontStyle: "bold",
                  fontSize: "20px",
                  lineHeight: "24px",
                  // borderColor: "#F5C258",
                  display: "flex",
                  justifyContent: "center",
                }}
                icon={
                  <Image
                    src="/assets/img/svg/common/UkrPoshtaLogo.svg"
                    alt={"Укрпошта логотип"}
                    width={24}
                    height={24}
                  />
                }
              >
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
