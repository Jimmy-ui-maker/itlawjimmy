"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import Navbar from "@/components/Navabr";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

{
  /**
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
*/
}

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}