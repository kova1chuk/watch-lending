import React from "react";
import { Scada } from "next/font/google";
import Head from "next/head";
import { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

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
        {/* <!-- Google tag (gtag.js) --> */}
      </Head>
      <body className={scada.className} style={{ padding: 0, margin: 0 }}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-NYKFRW502Z" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-NYKFRW502Z');
        `}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-NYKFRW502Z" />
        <Script id="facebook-pixel">
          {`
         !function(f,b,e,v,n,t,s)
         {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
         n.callMethod.apply(n,arguments):n.queue.push(arguments)};
         if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
         n.queue=[];t=b.createElement(e);t.async=!0;
         t.src=v;s=b.getElementsByTagName(e)[0];
         s.parentNode.insertBefore(t,s)}(window, document,'script',
         'https://connect.facebook.net/en_US/fbevents.js');
         fbq('init', '306854161803347');
         fbq('track', 'PageView');
        `}
        </Script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=306854161803347&ev=PageView&noscript=1"
          />`,
          }}
        ></noscript>
        {children}
      </body>
    </html>
  );
}
