import { THEME_KEY } from "@/constants/theme/theme.contant";
import { ETheme } from "@/enum/theme.enum";

export const getTheme = (): ETheme => {
  // 서버 환경
  if (typeof window === "undefined") {
    return ETheme.LIGHT;
  }

  // 클라이언트 환경
  const themeMode = localStorage.getItem(THEME_KEY);

  if (!themeMode) {
    const isDarkTheme: boolean = window.matchMedia(
      `(prefers-color-scheme: dark)`
    ).matches;

    if (isDarkTheme) {
      return ETheme.DARK;
    }
    return ETheme.LIGHT;
  }

  
  const theme: ETheme = themeMode as ETheme;
  return theme === ETheme.DARK ? ETheme.DARK : ETheme.LIGHT;
};
