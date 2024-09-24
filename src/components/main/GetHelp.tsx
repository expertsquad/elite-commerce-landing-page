"use client";
import React from "react";
import BehindContainer from "../ui/GetHelp/BehindContainer";
import GetHelpForm from "../ui/GetHelp/GetHelpForm";
import { useVisibleSection } from "../Shared/useVisibleSection";
import { set } from "lodash";

const GetHelp = () => {
  const { visibleSection, sectionRefs } = useVisibleSection(100, 110);

  return (
    <div className={`main-container my-10 `}>
      <div className={`get-help flex items-center justify-center`}>
        <BehindContainer />
        <GetHelpForm />
      </div>
    </div>
  );
};

export default GetHelp;
