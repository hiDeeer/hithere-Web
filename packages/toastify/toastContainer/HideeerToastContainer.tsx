import React from "react";
import { ToastContainer } from "react-toastify";
import { HideeerToastContainerProps } from "./HideeerToastContainer.type";

export const HideeerToastContainer = ({
  ...toastContainerProps
}: HideeerToastContainerProps) => {
  return <ToastContainer {...toastContainerProps} />;
};