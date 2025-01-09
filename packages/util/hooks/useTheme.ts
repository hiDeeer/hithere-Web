// "use client";
// import { useCallback, useMemo } from "react";
// import { create } from "zustand";
// import { DefaultTheme } from "styled-components";
// import { THEME_KEY } from "@src/constants/theme/theme.contant";
// import { ETheme } from "@src/enum/theme/theme.enum";
// import cookie from "@src/lib/cookie/cookie";
// import { darkTheme, lightTheme } from "@src/style/theme";

// // Zustand Store
// const useThemeStore = create((set) => ({
//   currentTheme: ETheme.LIGHT, // Default theme
//   setCurrentTheme: (theme) => set({ currentTheme: theme }),
// }));

// const useTheme = () => {
//   const { currentTheme, setCurrentTheme } = useThemeStore();

//   const { DARK, LIGHT } = ETheme;

//   const themeColor = useMemo((): DefaultTheme => {
//     return currentTheme === DARK ? darkTheme : lightTheme;
//   }, [DARK, currentTheme]);

//   const handleTheme = useCallback((): void => {
//     const switchTheme = currentTheme === DARK ? LIGHT : DARK;
//     window.localStorage.setItem(THEME_KEY, String(switchTheme));
//     setCurrentTheme(switchTheme);
//   }, [DARK, LIGHT, currentTheme, setCurrentTheme]);

//   return {
//     themeColor,
//     handleTheme,
//   };
// };

// export default useTheme;