"use client";
import React from "react";
import { useTheme } from "next-themes";
const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-transparent  dark:hover:bg-white transition text-black dark:text-white"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeSwitch;
