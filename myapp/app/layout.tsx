import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Commerce",
  description: "Epic ecommerce demo store powered by Next.js and MongoDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
