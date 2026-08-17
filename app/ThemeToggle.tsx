"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const hasDarkClass = document.documentElement.classList.contains("dark");
    
    if (hasDarkClass || isSystemDark) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      // Mode terang menggunakan bg-blue-100 dan text-blue-800
      className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-100 dark:bg-zinc-800 text-blue-800 dark:text-zinc-200 hover:bg-blue-200 dark:hover:bg-zinc-700 transition-colors"
      aria-label="Toggle Dark Mode"
      title="Toggle Dark Mode"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}