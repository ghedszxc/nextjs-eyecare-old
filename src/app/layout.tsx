import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Script from "next/script";
import SourcePoint from "@/components/SourcePoint";

const avenirLTStd = localFont({
  src: [
    // Light
    {
      path: "../styles/fonts/Avenir_LT_Std_35_Light.otf",
      weight: "100",
      style: "normal",
    },

    // Book
    {
      path: "../styles/fonts/Avenir_LT_Std_45_Book.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../styles/fonts/Avenir_LT_Std_45_Book_Arial.otf",
      weight: "300",
      style: "normal",
    },

    {
      path: "../styles/fonts/Avenir_LT_Std_55_Roman.otf",
      weight: "400",
      style: "normal",
    },

    // Oblique
    // {
    //   path: "../styles/fonts/Avenir_LT_Std_55_Oblique.otf",
    //   weight: "400",
    //   style: "normal",
    // },

    // Roman
    {
      path: "../styles/fonts/Avenir_LT_Std_55_Roman.otf",
      weight: "600",
      style: "normal",
    },

    // Medium
    {
      path: "../styles/fonts/Avenir_LT_Std_65_Medium.otf",
      weight: "500",
      style: "normal",
    },
    // {
    //   path: "../styles/fonts/Avenir_LT_Std_65_Medium_Oblique.otf",
    //   weight: "500",
    //   style: "italic",
    // },

    // Heavy
    {
      path: "../styles/fonts/Avenir_LT_Std_85_Heavy.otf",
      weight: "800",
      style: "normal",
    },
    // {
    //   path: "../styles/fonts/Avenir_LT_Std_85_Heavy_Oblique.otf",
    //   weight: "800",
    //   style: "italic",
    // },

    // // Black
    // {
    //   path: "../styles/fonts/Avenir_LT_Std_95_Black.otf",
    //   weight: "900",
    //   style: "normal",
    // },
    // {
    //   path: "../styles/fonts/Avenir_LT_Std_95_Black_Oblique.otf",
    //   weight: "900",
    //   style: "italic",
    // },
  ],
  variable: "--font-avenirLTStd",
});

export const metadata: Metadata = {
  title: "Headless Blueprint",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SourcePoint />
        <Script src={`/gaScript.js`} defer />
      </head>
      <body
        className={`${avenirLTStd.variable} ${avenirLTStd.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
