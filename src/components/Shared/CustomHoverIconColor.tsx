import React from "react";

const CustomHoverIconColor = ({
  children,
  menuItem,
  pathname,
}: {
  children: any;
  menuItem: any;
  pathname: any;
}) => {
  return (
    <div
      className={`[&>*]:h-[20px] [&>*]:w-[21px] group-hover:[&_path]:fill-white ${
        pathname === menuItem && "[&_path]:fill-white"
      }`}
    >
      {children}
    </div>
  );
};

export default CustomHoverIconColor;
