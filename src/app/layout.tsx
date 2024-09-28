// This is a server component file (no "use client")
import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import RootLayout from "@/components/RootLayout";
import ScrollToTopButton from "@/components/Shared/ScrollToTop";
import BuyNow from "@/components/Shared/BuyNow";
import Footer from "@/components/main/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Server-side metadata
export const metadata: Metadata = {
  title: "Elite Commerce",
  description: "Elite Commerce will dominate the e-commerce industry",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.className} scroll-smooth`}>
        <RootLayout>
          <BuyNow /> {children} <ScrollToTopButton />
          <Footer />
        </RootLayout>
      </body>
    </html>
  );
}
