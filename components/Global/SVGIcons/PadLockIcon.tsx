import React from "react";
import { IIconProps } from "./interface";

const PadLockIcon:React.FC<IIconProps> = ({className}) => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.4232 7.44804V5.30104C13.4232 2.78804 11.3852 0.750045 8.87225 0.750045C6.35925 0.739045 4.31325 2.76704 4.30225 5.28104V5.30104V7.44804"
        stroke="#9D9D9D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.683 19.25H5.042C2.948 19.25 1.25 17.553 1.25 15.458V11.169C1.25 9.07395 2.948 7.37695 5.042 7.37695H12.683C14.777 7.37695 16.475 9.07395 16.475 11.169V15.458C16.475 17.553 14.777 19.25 12.683 19.25Z"
        stroke="#9D9D9D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.86279 12.2031V14.4241"
        stroke="#9D9D9D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PadLockIcon;
