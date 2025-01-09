"use client";
import React from "react";
import { ReactNode } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import GlobalStyle from "./GlobalStyle";
import { lightTheme, darkTheme } from "./HiThereTheme";

interface Props {
  children: ReactNode;
  theme: "LIGHT" | "DARK";
}

export const HiThereThemeProvider = ({ children,theme }: Props) => {
  const themeObject = theme =="DARK" ? darkTheme : lightTheme;

  return (
  
    <StyledComponentsThemeProvider theme={themeObject}>
      <GlobalStyle />
      {children}
    </StyledComponentsThemeProvider>
    
  );
};