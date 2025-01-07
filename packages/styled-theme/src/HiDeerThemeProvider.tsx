import React from "react";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { lightTheme,darkTheme } from "./HiDeerTheme";


interface Props {
  children: ReactNode;
  theme: "LIGHT" | "DARK";
}

export const HiDeerThemeProvider = ({ children, theme }: Props) => {
  return (
    <ThemeProvider theme={theme === "LIGHT" ? lightTheme : darkTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};