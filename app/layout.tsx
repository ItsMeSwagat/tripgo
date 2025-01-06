import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const HKGrotesk = localFont({
  src: [
    {
      path: "./fonts/HankenGrotesk-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/HankenGrotesk-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/HankenGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/HankenGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/HankenGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/HankenGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/HankenGrotesk-Thin.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/HankenGrotesk-Light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/HankenGrotesk-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: "Trip Turbo",
  description: "Get your Trip Better",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={HKGrotesk.variable}>{children}</body>
    </html>
  );
}
