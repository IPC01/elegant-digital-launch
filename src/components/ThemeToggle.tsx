import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      onClick={toggle}
      aria-label="Alternar tema"
      className="relative w-9 h-9 rounded-sm border border-border grid place-items-center hover:border-primary hover:bg-primary/5 transition-all overflow-hidden"
    >
      <Sun className="w-4 h-4 absolute transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <Moon className="w-4 h-4 absolute transition-all duration-500 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </button>
  );
};
