"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import notFoundImg from "@/assets/images/notFound.svg";
import React, { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setInterval(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="h-[calc(100vh-98px)] w-full flex justify-center items-center flex-col gap-">
      <div className="relative md:w-[600px] md:h-[600px] w-[350px] h-[350px]">
        <Image
          src={notFoundImg}
          alt="not-found"
          fill
          className="object-contain top-0 left-0 w-full h-full"
        />
      </div>
      <div>
        <span className="font-extrabold [font-size:_clamp(30px,2.5vw,50px)]">
          PAGE NOT FOUND
        </span>
      </div>
      <Link
        href="/"
        className="bg-gradient-primary rounded-full text-white px-10 py-3 "
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
