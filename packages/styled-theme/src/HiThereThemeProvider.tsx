"use client";
import React from "react";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { lightTheme, darkTheme } from "./HiThereTheme";
import { useTheme, ThemeMode } from "@hithere/util";

interface Props {
  children: ReactNode;
  theme: "LIGHT" | "DARK";
}

export const HiThereThemeProvider = ({ children,theme }: Props) => {

  return (
    <ThemeProvider theme={theme === "LIGHT" ? lightTheme : darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};