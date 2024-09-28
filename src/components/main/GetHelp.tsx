import React from "react";
import BehindContainer from "../ui/GetHelp/BehindContainer";
import GetHelpForm from "../ui/GetHelp/GetHelpForm";

const GetHelp = () => {
  return (
    <section id="get-help" className={`main-container `}>
      <div className={`get-help flex items-center justify-center`}>
        <BehindContainer />
        <GetHelpForm />
      </div>
    </section>
  );
};

export default GetHelp;
