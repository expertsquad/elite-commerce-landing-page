import React from "react";

const HighlightText = ({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) => {
  return <div className={`text-gradient-primary ${className}`}>{text}</div>;
};

export default HighlightText;
