"use client";
import React from "react";
import BehindContainer from "../ui/GetHelp/BehindContainer";
import GetHelpForm from "../ui/GetHelp/GetHelpForm";
import { useVisibleSection } from "../Shared/useVisibleSection";
import { set } from "lodash";

const GetHelp = () => {
  const { visibleSection, sectionRefs } = useVisibleSection(100, 110);

  return (
    <section id="Get-help" className={`main-container my-10 overflow-hidden `}>
      <div className={`get-help flex items-center justify-center`}>
        <BehindContainer />
        <GetHelpForm />
      </div>
    </section>
  );
};

export default GetHelp;
