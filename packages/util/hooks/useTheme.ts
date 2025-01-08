"use client";
import { useState, useEffect } from "react";

export type ThemeMode = "LIGHT" | "DARK";

export const useTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>(
    () => (localStorage.getItem("theme") as ThemeMode) || "LIGHT"
  );

  const toggleTheme = () => {
    const newTheme = theme === "LIGHT" ? "DARK" : "LIGHT";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeMode;
    if (savedTheme && savedTheme !== theme) {
      setTheme(savedTheme);
    }
  }, [theme]);

  return { theme, toggleTheme };
};
