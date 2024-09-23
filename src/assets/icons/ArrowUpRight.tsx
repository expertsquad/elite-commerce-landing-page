import React from "react";

const ArrowUpRight = ({
  color,
  height,
  width,
}: {
  color?: string;
  height?: number | string;
  width?: string | number;
}) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_15480_56325)">
        <path
          d="M21.25 8.75L8.75 21.25"
          stroke={`${color}`}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 8.75H21.25V20"
          stroke={`${color}`}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_15480_56325">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowUpRight;
