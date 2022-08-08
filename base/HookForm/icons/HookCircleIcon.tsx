import React from "react";
/**
 *
 * @return {JSX.Element}
 */
function HookCircleIcon({ width = 10, height = 10 }) {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={height}
      height={width}
      className="h-5 h-5"
    >
      <path d="M7.5 0a7.5 7.5 0 100 15 7.5 7.5 0 000-15z" fill="currentColor" />
    </svg>
  );
}

export default HookCircleIcon;
