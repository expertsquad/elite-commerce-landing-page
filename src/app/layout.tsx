// app/layout.tsx or your Layout component file
import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import RootLayout from "@/components/RootLayout";
import ScrollToTopButton from "@/components/Shared/ScrollToTop";
import BuyNow from "@/components/Shared/BuyNow";
import Footer from "@/components/main/Footer";
import ClientLayout from "@/components/ClientLayout"; // Import the client layout

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
        <ClientLayout>
          <RootLayout>
            <BuyNow />
            {children} {/* Render children within ClientLayout */}
            <ScrollToTopButton />
            <Footer />
          </RootLayout>
        </ClientLayout>
      </body>
    </html>
  );
}
