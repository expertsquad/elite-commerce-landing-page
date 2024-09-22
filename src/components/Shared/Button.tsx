import React from "react";

const Button = ({
  type,
  children,
  className,
  onClick,
  disabled,
}: {
  type?: "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
