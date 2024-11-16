import { Inter } from "next/font/google";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lilia's Blog",
  description: "Created by jcostadev23 ",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-pink-50 justify-center">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
