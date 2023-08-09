import React from "react";
import { Card, Space } from "antd";
import Link from "next/link";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const { Meta } = Card;

interface OtherProductsProps {
  otherProducts: {
    slug: string; // Change from id to slug
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

const responsive: ResponsiveType = {
  xxl: {
    breakpoint: { max: 3000, min: 1600 },
    items: 5,
  },
  xl: {
    breakpoint: { max: 1600, min: 1200 },
    items: 4,
  },
  lg: {
    breakpoint: { max: 1200, min: 992 },
    items: 3,
  },
  md: {
    breakpoint: { max: 992, min: 768 },
    items: 2,
  },
  sm: {
    breakpoint: { max: 768, min: 576 },
    items: 1,
  },
  xs: {
    breakpoint: { max: 576, min: 0 },
    items: 1,
  },
};

const OtherProducts: React.FC<OtherProductsProps> = ({ otherProducts }) => {
  return (
    <Carousel responsive={responsive}>
      <Space>
        {otherProducts.map((product) => (
          <Link href={`/watches/${product.slug}`} key={product.slug}>
            {" "}
            {/* Change href to use product.slug */}
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt={product.title} src={product.imageUrl} />}
            >
              <Meta title={product.title} description={product.description} />
            </Card>
          </Link>
        ))}
      </Space>
    </Carousel>
  );
};

export default OtherProducts;
