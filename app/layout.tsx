import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SampleComponent from "./components/sample";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next 15 App Dev",
  description: "App Dev Guide to Next 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-24 my-4`}
      >
        {" "}
        {/* <SampleComponent /> */}
        {children}
      </body>
    </html>
  );
}
