import React from "react";
import { IIconProps } from "./interface";

const DropBoxIcon:React.FC<IIconProps> = ({className}) => {
  return (
    <svg
      width="25"
      height="22"
      viewBox="0 0 25 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12.5 4.5L6.5 8.5L0.5 4.5L6.5 0.5L12.5 4.5Z" fill="#183059" />
      <path d="M12.5 4.5L18.5 8.5L24.5 4.5L18.5 0.5L12.5 4.5Z" fill="#183059" />
      <path
        d="M12.5 12.5L18.5 16.5L24.5 12.5L18.5 8.5L12.5 12.5Z"
        fill="#183059"
      />
      <path
        d="M6.5 17.5L12.5 21.5L18.5 17.5L12.5 13.5L6.5 17.5Z"
        fill="#183059"
      />
      <path
        d="M12.5 12.5L6.5 16.5L0.5 12.5L6.5 8.5L12.5 12.5Z"
        fill="#183059"
      />
      <path
        d="M6.5 0.5L0.5 4.5L6.5 8.5L12.5 4.5L6.5 0.5ZM24.5 4.5L18.5 0.5L12.5 4.5L18.5 8.5L24.5 4.5ZM12.5 12.5L18.5 16.5L24.5 12.5L18.5 8.5L12.5 12.5ZM6.5 17.5L12.5 21.5L18.5 17.5L12.5 13.5L6.5 17.5ZM0.5 12.5L6.5 16.5L12.5 12.5L6.5 8.5L0.5 12.5Z"
        fill="url(#paint0_linear_1836_12978)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1836_12978"
          x1="0.689448"
          y1="4.09373"
          x2="23.4671"
          y2="14.7151"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.2" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DropBoxIcon;
