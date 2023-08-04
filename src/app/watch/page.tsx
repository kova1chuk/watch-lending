"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button, Card, Row, Space } from "antd";

import Chessboard from "@/components/DescriptionChessboard";
import OrderBlock from "@/components/OrderBlock";
import Footer from "@/components/Footer";
import MainBannerCarousel from "@/components/MainBanner";
import Advantages from "@/components/Advantages";
import OrderModal from "@/components/OrderModal";
import { Head } from "next/document";

const WatchPage = () => {
  const [isOrderModalOpen, setOrderIsModalOpen] = useState(false);

  return (
    <div style={{ overflowX: "hidden" }}>
      <main>
        <section style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <MainBannerCarousel />
          <Chessboard />
          <Advantages />

          <OrderBlock handleCreateOrder={() => setOrderIsModalOpen(true)} />

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
