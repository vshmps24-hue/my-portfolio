"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const isDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    setDarkMode(newDarkMode);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm">
        Theme
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
    >
      {darkMode ? "Light" : "Dark"}
    </button>
  );
}