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
            ? "bg-gradient-to-r from-[#ffffff88] via-[#f0f0f0aa] to-[#ffffff88] backdrop-blur-lg shadow-lg border border-[#e2e4e5] z-50" // Glass effect with custom colors
            : " bg-white "
        }`}
      >
        <Header />
      </div>
      <div>{children}</div>
    </>
  );
}
