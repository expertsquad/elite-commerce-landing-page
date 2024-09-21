import Button from "@/components/Shared/Button";
import CustomGlobalInput from "@/components/Shared/CustomGlobalInput";
import HighlightText from "@/components/Shared/HighlightText";
import React from "react";

const GetHelpForm = () => {
  return (
    <div className="bg-white md:w-[430px] w-[300px] md:h-[670px] h-min rounded-2xl p-5   shadow-lg space-y-7 z-20">
      <div className="">
        <p className="text-black-70 font-medium [font-size:_clamp(11px,2.5vw,20px)]">
          <span className="font-bold [font-size:_clamp(20px,2.5vw,26px)] ">
            <HighlightText>Get Help?</HighlightText>
          </span>{" "}
          Please Write Your Subject, Massage & Notify Your Email.
        </p>
      </div>
      <form className="space-y-4">
        <CustomGlobalInput
          type="text"
          label="Full Name*"
          placeholder="Enter Your Name"
          name="fullName"
        />
        <CustomGlobalInput
          type="email"
          label="Email*"
          placeholder="Enter Your Email"
          name="email"
        />
        <CustomGlobalInput
          type="text"
          label="Subject*"
          placeholder="write your subject"
          name="subject"
        />
        <CustomGlobalInput
          type="textarea"
          label="Your message*"
          placeholder="Type your message here"
          name="subject"
        />
        <Button className="outline-none hover:scale-105 transition-all duration-300 hover:bg-gradient-primary-reverse flex items-center justify-center gap-1.5 bg-gradient-primary rounded-full py-3.5 px-10 text-white text-base w-full ">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default GetHelpForm;
