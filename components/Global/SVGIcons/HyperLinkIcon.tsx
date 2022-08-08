import React from "react";
import { IIconProps } from "./interface";

const HyperLinkIcon:React.FC<IIconProps> = ({className}) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.5 13C10.9295 13.5741 11.4774 14.0491 12.1066 14.3929C12.7357 14.7367 13.4315 14.9411 14.1467 14.9923C14.8618 15.0435 15.5796 14.9403 16.2513 14.6897C16.9231 14.4392 17.5331 14.047 18.04 13.54L21.04 10.54C21.9508 9.59695 22.4548 8.33394 22.4434 7.02296C22.432 5.71198 21.9061 4.45791 20.9791 3.53087C20.0521 2.60383 18.798 2.07799 17.487 2.0666C16.176 2.0552 14.913 2.55918 13.97 3.46997L12.25 5.17997"
        stroke="#183059"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M14.5002 11.0002C14.0707 10.4261 13.5228 9.95104 12.8936 9.60729C12.2645 9.26353 11.5687 9.05911 10.8535 9.00789C10.1384 8.95667 9.42061 9.05986 8.74885 9.31044C8.0771 9.56103 7.46709 9.95316 6.9602 10.4602L3.9602 13.4602C3.04941 14.4032 2.54544 15.6662 2.55683 16.9772C2.56822 18.2882 3.09407 19.5423 4.02111 20.4693C4.94815 21.3964 6.20221 21.9222 7.51319 21.9336C8.82418 21.945 10.0872 21.441 11.0302 20.5302L12.7402 18.8202"
        stroke="#183059"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HyperLinkIcon;
