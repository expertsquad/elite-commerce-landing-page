"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const CustomLink: React.FC<{ children: React.ReactNode; path: string }> = ({
  children,
  path,
}) => {
  const params = useParams();
  const pathname = params.pathname as string;
  const isActive = pathname === path;
  return (
    <Link
      href={path}
      className={
        isActive
          ? " border-b-[2px] border-[#04A4E6] text-gradient-primary  "
          : "border-b-[2px] border-transparent text-black-70 relative block after:block after:content-[''] after:absolute after:h-[2px] after:bg-secondary after:w-full after:scale-x-0 after:hover:scale-x-125 after:transition after:duration-300 after:origin-center"
      }
    >
      {children}
    </Link>
  );
};
export default CustomLink;
