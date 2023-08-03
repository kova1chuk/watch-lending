"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button, Card, Row, Space } from "antd";

import Chessboard from "@/components/Chessboard";
import PriceBlock from "@/components/PriceBlock";
import Footer from "@/components/Footer";
import MainBannerCarousel from "@/components/MainBannerCarousel";
import Advantages from "@/components/Advantages";
import OrderModal from "@/components/OrderModal";

const WatchPage = () => {
  const [isOrderModalOpen, setOrderIsModalOpen] = useState(true);

  return (
    <div style={{ overflowX: "hidden" }}>
      <main>
        <section>
          <MainBannerCarousel />
          <Chessboard />
          <Advantages />
          <PriceBlock handleCreateOrder={() => setOrderIsModalOpen(true)} />

          <Row justify="center">
            <Space.Compact>
              <Button
                type="default"
                size="large"
                onClick={() => setOrderIsModalOpen(true)}
                style={{
                  color: "#CA3B2B",
                  fontStyle: "bold",
                  lineHeight: "26px",
                  fontSize: "20px",
                  borderColor: "#787878",
                  display: "flex",
                  justifyContent: "center",
                  borderRight: "none",
                  height: "2.6rem",
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
                Нова пошта -
              </Button>
              <Card
                size="small"
                style={{
                  // color: "#CA3B2B",
                  fontStyle: "bold",
                  lineHeight: "16px",
                  fontSize: "20px",
                  borderColor: "#787878",
                  display: "flex",
                  justifyContent: "center",
                  padding: 0,
                  height: "2.6rem",
                  borderRadius: "0 8px 8px 0",
                  borderLeft: "none",
                }}
              >
                <p>
                  <span
                    style={{
                      fontSize: "1rem",
                    }}
                  >
                    отримання
                  </span>{" "}
                  1-2 дні
                </p>
              </Card>
            </Space.Compact>
          </Row>
          <Row justify="center">
            <Space.Compact>
              <Button
                type="default"
                size="large"
                onClick={() => setOrderIsModalOpen(true)}
                style={{
                  color: "#F5C258",
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
              <Card
                size="small"
                style={{
                  // color: "#CA3B2B",
                  fontStyle: "bold",
                  lineHeight: "16px",
                  fontSize: "20px",
                  borderColor: "#787878",
                  display: "flex",
                  justifyContent: "center",
                  padding: 0,
                  height: "2.6rem",
                  borderRadius: "0 8px 8px 0",
                  borderLeft: "none",
                }}
              >
                <p>
                  <span
                    style={{
                      fontSize: "1rem",
                    }}
                  >
                    отримання
                  </span>{" "}
                  2-5 днів
                </p>
              </Card>
            </Space.Compact>
          </Row>

          {/* </div> */}

          <OrderModal
            isModalOpen={isOrderModalOpen}
            setIsModalOpen={setOrderIsModalOpen}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WatchPage;
