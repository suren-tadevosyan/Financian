import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../app/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Financian",
  description: "Daily Business Content And News",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-screen ">
          <div className="h-24">
            <Navbar />
          </div>
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}
