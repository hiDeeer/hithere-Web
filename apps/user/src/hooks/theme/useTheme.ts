"use client"
import { useCallback, useMemo } from "react";

import { DefaultTheme } from "styled-components";
import { THEME_KEY } from "@/constants/theme/theme.contant";
import { ETheme } from "@/enum/theme.enum";
import { darkTheme, lightTheme } from "@hithere/styled-theme";
import { useThemeStore } from "@/store/theme/theme.Store";



const useTheme = () => {
  const { currentTheme, setCurrentTheme } = useThemeStore();

  const { DARK, LIGHT } = ETheme;

  const themeColor = useMemo((): DefaultTheme => {
    return currentTheme === DARK ? darkTheme : lightTheme;
  }, [DARK, currentTheme]);

  const handleTheme = useCallback((): void => {
    const switchTheme = currentTheme === DARK ? LIGHT : DARK;
    window.localStorage.setItem(THEME_KEY, String(switchTheme));
    setCurrentTheme(switchTheme);
  }, [DARK, LIGHT, currentTheme, setCurrentTheme]);

  return {
    themeColor,
    handleTheme,
  };
};

export default useTheme;
