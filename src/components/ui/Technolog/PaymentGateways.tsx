import HighlightText from "@/components/Shared/HighlightText";
import { paymentGatewayData } from "@/constants/paymentGatewayData";
import Image from "next/image";
import React from "react";

const PaymentGateways = () => {
  return (
    <div className="space-y-5 px-5 py-10 lg:shadow-2xl md:shadow-xl shadow-lg rounded-[10px] md:col-span-2 lg:order-none order-1">
      <div className="text-center font-semibold [font-size:_clamp(14px,2.5vw,18px)]">
        <HighlightText>Payment Gateways</HighlightText>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {paymentGatewayData?.map((gate) => (
          <div
            key={gate?._id}
            className="border border-black-10 flex items-center justify-center px-3.5 rounded-[10px] "
          >
            <div className="relative w-[60px] h-[60px]">
              <Image
                src={gate?.image}
                alt="react"
                className="w-full h-full top-0 left-0 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentGateways;
