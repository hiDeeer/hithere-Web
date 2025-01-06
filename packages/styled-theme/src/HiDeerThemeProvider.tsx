import React = require("react");
import { ReactNode } from "react";
import GlobalStyle from "./GlobalStyle";


interface Props {
  children: ReactNode;
}

export const HiDeerThemeProvider = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};