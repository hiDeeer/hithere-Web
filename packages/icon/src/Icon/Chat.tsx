import React from "react";
import { IconProps } from "../type";

const CustomIcon = (props:IconProps) => {
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
        d="M4.12154 10.6108C4.88876 6.25966 9.03803 3.35431 13.3892 4.12154V4.12154C17.7403 4.88876 20.6457 9.03803 19.8785 13.3892L18.9944 18.4028C18.8474 19.2365 18.7739 19.6534 18.591 19.9644C18.297 20.4645 17.8003 20.8123 17.2299 20.9175C16.875 20.983 16.4581 20.9095 15.6244 20.7625L10.6108 19.8785C6.25966 19.1112 3.35431 14.962 4.12154 10.6108V10.6108Z"
        stroke="black"
        strokeWidth="2"
      />
      <path
        d="M9 11L15 11"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15H15"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CustomIcon;
