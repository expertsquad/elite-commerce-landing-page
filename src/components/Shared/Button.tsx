import React from "react";

const Button = ({
  type,
  children,
  className,
}: {
  type?: "submit" | "reset";
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button type={type} className={`${className}`}>
      {children}
    </button>
  );
};

export default Button;
