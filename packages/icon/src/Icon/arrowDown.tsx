import React from "react";
import { IconProps } from "../type";

export const ArrowDown = ({ color = "#000", ...props }:IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 9L12 15L6 9"
        stroke={color!}
       stroke-width="2"
      />
    </svg>
  );
};


