// src/components/ThemeProviderWrapper.tsx
"use client";

import { ThemeProvider } from "next-themes";
import ThemeSwitch from "@/components/ui/themeSwitch";

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {/* Optional: fixed theme toggle */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeSwitch />
      </div>
      {children}
    </ThemeProvider>
  );
}
