import { create } from "zustand";
import { ETheme } from "@/enum/theme.enum";
import { getTheme } from "@/utils/theme/getTheme";

type ThemeStore = {
  currentTheme: ETheme;
  setCurrentTheme: (theme: ETheme) => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  currentTheme: getTheme(), 
  setCurrentTheme: (theme: ETheme) => set({ currentTheme: theme }), // 상태 업데이트 함수
}));
