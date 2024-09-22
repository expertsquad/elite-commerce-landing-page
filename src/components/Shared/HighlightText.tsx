import React from "react";

const HighlightText = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <span className={`text-gradient-primary ${className}`}>{children}</span>
  );
};

export default HighlightText;
