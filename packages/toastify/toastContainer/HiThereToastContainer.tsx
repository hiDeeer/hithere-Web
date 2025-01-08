import React from "react";
import { ToastContainer } from "react-toastify";
import { HiThereToastContainerProps } from "./HiThereToastContainer.type";

export const HideeerToastContainer = ({
  ...toastContainerProps
}: HiThereToastContainerProps) => {
  return <ToastContainer {...toastContainerProps} />;
};