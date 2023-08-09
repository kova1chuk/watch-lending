import React from "react";
import { Card, Space } from "antd";
import Link from "next/link";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

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
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <Image
                  alt={product.title}
                  src={product.imageUrl}
                  // fill={true}
                  // style={{ borderRadius: "1.5rem" }}
                  width={400} // Adjust the width of the image as per your requirements
                  height={300} // Adjust the height of the image as per your requirements
                  layout="responsive" // Use responsive layout to maintain aspect ratio
                />
              }
            >
              <Meta title={product.title} description={product.description} />
            </Card>
          </Link>
        ))}
        {/* <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://best-time.biz/image/cache/catalog/01-04-2019/29-04/paganidesignzurick10bar5a-590x590.jpg"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://best-time.biz/image/cache/catalog/01-04-2019/29-04/benyarautomatic10bar1-590x590.jpg"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt="example"
                  src="https://best-time.biz/image/cache/catalog/01-06-2017/03-08/1627748870210-590x590.jpg"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card> */}
      </Space>
    </Carousel>
  );
};

export default OtherProducts;
