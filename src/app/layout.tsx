import React from "react";
import { Scada } from "next/font/google";
import Head from "next/head";
import { Metadata } from "next";

import "./globals.css";

// Initialize Scada font
const scada = Scada({
  weight: "400",
  subsets: ["cyrillic-ext", "latin-ext"],
});

export const metadata: Metadata = {
  title:
    "Інтернет-магазин годинників наручних - Купуйте стильні годинники онлайн",
  description:
    "Відкрийте для себе широкий асортимент стильних годинників на будь-яку подію.",
  keywords:
    "годинники, годинники наручні, купити годинник, інтернет-магазин годинників",
  // Add more metadata fields if desired
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="description" content={metadata.description as string} />
        <meta name="keywords" content={metadata.keywords as string} />
        {/* <meta name="author" content={metadata.author} /> */}

        {/* Open Graph (og) tags */}
        <meta property="og:title" content={metadata.title as string} />
        <meta
          property="og:description"
          content={metadata.description as string}
        />
        <meta property="og:type" content="website" />
        {/* Add more og tags like og:image, og:url, etc. */}

        <title>{metadata.title as string}</title>
        {/* Add link tags for favicon and stylesheets */}
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </Head>
      <body className={scada.className} style={{ padding: 0, margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
