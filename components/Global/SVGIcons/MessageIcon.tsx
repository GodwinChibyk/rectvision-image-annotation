import React from "react";
import { IIconProps } from "./interface";

const MessageIcon:React.FC<IIconProps> = ({className}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5253 3.00005L7.45618 3C4.28665 3 2 5.56151 2 8.85897V15.141C2 18.4385 4.28665 21 7.45618 21H16.5168C18.0392 20.9829 19.4802 20.3421 20.5126 19.2266C21.5449 18.111 22.0786 16.6183 21.9893 15.0959L21.9906 8.85897C22.0786 7.38171 21.5449 5.88895 20.5126 4.77344C19.4802 3.65794 18.0392 3.01705 16.5253 3.00005ZM7.45618 4.52843L16.5084 4.52838C17.6073 4.54072 18.6532 5.00592 19.4026 5.81562C20.152 6.62533 20.5393 7.70887 20.4745 8.81389L20.4732 15.141C20.5393 16.2911 20.152 17.3747 19.4026 18.1844C18.6532 18.9941 17.6073 19.4593 16.5084 19.4716L7.45618 19.4716C5.16279 19.4716 3.51744 17.6284 3.51744 15.141V8.85897C3.51744 6.37155 5.16279 4.52843 7.45618 4.52843ZM18.024 8.63837C17.7622 8.30886 17.2847 8.25555 16.9576 8.5193L12.8583 11.8242L12.7408 11.9068C12.2575 12.2095 11.6228 12.1816 11.1598 11.8181L7.03057 8.51731L6.93763 8.4536C6.61736 8.26727 6.20141 8.34031 5.96461 8.64086C5.70412 8.97146 5.75904 9.45216 6.08726 9.71453L10.2217 13.0195L10.383 13.1375C11.4231 13.8459 12.8013 13.8067 13.7988 13.0236L17.9058 9.71255L17.9882 9.63551C18.24 9.36261 18.2621 8.93792 18.024 8.63837Z"
        fill="#9D9D9D"
      />
    </svg>
  );
};

export default MessageIcon;
