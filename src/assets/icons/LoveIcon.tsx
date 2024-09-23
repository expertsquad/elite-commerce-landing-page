import React from "react";

const LoveIcon = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.9" filter="url(#filter0_d_15480_56304)">
        <rect
          x="10"
          y="7"
          width="30"
          height="30"
          rx="15"
          fill="url(#paint0_linear_15480_56304)"
        />
        <g clip-path="url(#clip0_15480_56304)">
          <path
            d="M21.2341 15.3056C21.8979 15.1925 22.5786 15.2298 23.2261 15.4148C23.8735 15.5998 24.4712 15.9277 24.9751 16.3744L25.0029 16.3991L25.0284 16.3766C25.5092 15.9546 26.0746 15.64 26.6867 15.4537C27.2989 15.2675 27.9436 15.2139 28.5781 15.2966L28.7626 15.3236C29.5623 15.4617 30.3098 15.8135 30.9259 16.3417C31.5421 16.87 32.0039 17.555 32.2624 18.3243C32.521 19.0935 32.5667 19.9184 32.3948 20.7115C32.2228 21.5047 31.8396 22.2365 31.2856 22.8296L31.1506 22.9684L31.1146 22.9991L25.5271 28.5334C25.3982 28.661 25.2273 28.7376 25.0463 28.7489C24.8652 28.7602 24.6862 28.7055 24.5424 28.5949L24.4718 28.5334L18.8521 22.9669C18.2568 22.3876 17.8334 21.6549 17.6288 20.8498C17.4243 20.0448 17.4465 19.1988 17.6931 18.4056C17.9398 17.6124 18.4011 16.903 19.0261 16.3558C19.651 15.8087 20.4153 15.4452 21.2341 15.3056Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_15480_56304"
          x="0.25"
          y="0.25"
          width="49.5"
          height="49.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="4.875" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.33 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15480_56304"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15480_56304"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_15480_56304"
          x1="25"
          y1="7"
          x2="25"
          y2="37"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF1B1B" />
          <stop offset="1" stop-color="#FF6767" />
        </linearGradient>
        <clipPath id="clip0_15480_56304">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(16 13)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LoveIcon;
