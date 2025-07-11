"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const { language } = useLanguage();
  const isArabic = language === "ar";

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="text-foreground">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">
        {language === "ar"
          ? "تبديل السمة"
          : language === "fr"
          ? "Basculer le thème"
          : "Toggle theme"}
      </span>
    </Button>
  );
}
