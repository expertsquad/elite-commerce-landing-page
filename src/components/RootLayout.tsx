"use client";
import Header from "@/components/hero/Header";
import { useScrollDetection } from "@/components/Shared/useScrollDetection";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isScrolled } = useScrollDetection(8); // Set your threshold (e.g., 8)

  return (
    <>
      <div
        className={`sticky top-0 z-[1000] transition-transform duration-300 ease-in-out h-full ${
          isScrolled
            ? "bg-gradient-to-r from-[#eeeded88] via-[#dfdedeaa] to-[#ebe9e988] backdrop-blur-2xl shadow-lg z-50" // Glass effect with custom colors
            : " bg-gradient-to-r from-[#ececec88] via-[#e7e7e7aa] to-[#f1f1f188] backdrop-blur-2xl  z-50"
        }`}
      >
        <Header />
      </div>
      <div>{children}</div>
    </>
  );
}
