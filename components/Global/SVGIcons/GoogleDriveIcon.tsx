import React from "react";
import { IIconProps } from "./interface";

const GoogleDriveIcon:React.FC<IIconProps> = ({className}) => {
  return (
    <svg
      width="23"
      height="20"
      viewBox="0 0 23 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.30639 13.7188H8.1887L8.13113 13.8204L5.2694 18.8246L5.09668 19.1264H5.44466H18.7928H18.9104L18.968 19.0244L21.8298 14.0206L22.0033 13.7188H21.6545H8.30639Z"
        fill="#9D9D9D"
      />
      <path
        d="M15.7164 12.4545L15.7748 12.5553H15.8925L21.6553 12.5307L22.0041 12.529L21.8297 12.228L15.1554 0.668071L15.0979 0.566895L14.9802 0.567318L9.21566 0.590601L8.86768 0.592295L9.04209 0.893708L15.7164 12.4545Z"
        fill="#9D9D9D"
      />
      <path
        d="M10.9209 6.57714L10.862 6.47512L7.95882 1.49588L7.78356 1.19531L7.60957 1.49673L0.935308 13.0567L0.876465 13.1574L0.935731 13.259L3.83895 18.2391L4.01378 18.5401L4.18777 18.2383L10.862 6.67789L10.9209 6.57714Z"
        fill="#9D9D9D"
      />
    </svg>
  );
};

export default GoogleDriveIcon;
