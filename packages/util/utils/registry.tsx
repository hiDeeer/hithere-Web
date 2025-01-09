'use client'
import { useServerInsertedHTML } from "next/navigation";
import type { ReactNode } from "react";
import React, { useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

interface Props {
  children: ReactNode;
}

const StyledComponentsRegistry = ({ children }: Props) => {
  
  const [sheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    try {
      const styles = sheet.getStyleElement();
      sheet.instance.clearTag();
      return <>{styles}</>;
    } catch (error) {
      console.error('Failed to get style element:', error);
      return null;
    }
  });


  if (typeof window !== "undefined") {
    return <>{children}</>;
  }

  
  try {
    return (
      <StyleSheetManager sheet={sheet.instance}>
        {children}
      </StyleSheetManager>
    );
  } catch (error) {
    console.error('Failed to create StyleSheetManager:', error);
    return <>{children}</>;
  }
};

export default StyledComponentsRegistry;