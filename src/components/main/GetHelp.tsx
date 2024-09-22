import React from "react";
import BehindContainer from "../ui/GetHelp/BehindContainer";
import GetHelpForm from "../ui/GetHelp/GetHelpForm";

const GetHelp = () => {
  return (
    <div className="main-container my-10">
      <div className="get-help flex items-center justify-center relative group">
        <BehindContainer />
        <GetHelpForm />
      </div>
    </div>
  );
};

export default GetHelp;
