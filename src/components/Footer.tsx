import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const CustomFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer
      style={{
        textAlign: "center",
        backgroundColor: "#f0f2f5",
        padding: "20px",
      }}
    >
      Designed and Developed by Parus Corporation &copy; {currentYear}
    </Footer>
  );
};

export default CustomFooter;
