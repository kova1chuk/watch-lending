import React from "react";
import { Layout } from "antd";
import Link from "next/link";

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
      <section style={{ margin: "1rem" }}>
        <Link href="/privacy-policy" className="footer-link">
          Політика конфіденційності
        </Link>{" "}
        |{" "}
        <Link href="/return-exchange-policy" className="footer-link">
          Умови повернення та обміну
        </Link>{" "}
        |{" "}
        <Link
          href="/personal-data-processing-agreement"
          className="footer-link"
        >
          Згода на обробку персональних даних
        </Link>
      </section>
      <p>Designed and Developed by Parus Corporation &copy; {currentYear}</p>
      <style jsx>{`
        .footer-link {
          color: #1890ff;
          text-decoration: none;
        }

        .footer-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </Footer>
  );
};

export default CustomFooter;
