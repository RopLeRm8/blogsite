import { useContext, useState, useEffect } from "react";
import { ThemeModeContext } from "./useCreateTheme";
type Setting = {
  category: string;
  name: string;
  description: string;
  action?: () => void;
  value?: string | boolean;
  mode: string;
  buttonFill?: string;
};

type SettingsByCategory = Record<string, Setting[]>;
export default function useGetSettings() {
  const [soundEffects, setSoundEffects] = useState<boolean | undefined>();
  useEffect(() => {
    const sfxValue = localStorage.getItem("sfx");
    setSoundEffects(sfxValue === "yes" ? true : false);
  }, []);

  useEffect(() => {
    const val = soundEffects ? "yes" : "none";
    localStorage.setItem("sfx", val);
  }, [soundEffects]);

  const ThemeContext = useContext(ThemeModeContext);
  const themeMode = ThemeContext?.themeMode;
  const setThemeMode = ThemeContext?.setThemeMode;
  if (!setThemeMode) {
    return { settingsByCategory: {} };
  }
  const switchThemeMode = () => {
    const currentTheme = localStorage.getItem("theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    setThemeMode(newTheme);
  };
  const handleSfxChange = () => {
    setSoundEffects((prev) => !prev);
  };

  const settings = [
    {
      category: "User preferences",
      name: "Dark mode",
      description: "Change theme mode between dark and light",
      action: switchThemeMode,
      value: themeMode,
      mode: "switch",
    },
    {
      category: "User preferences",
      name: "Language",
      description: "Choose preffered language",
      mode: "select",
    },
    {
      category: "Website preferences",
      name: "Sound effects",
      description: "Enable/Disable sound effects on the website locally",
      action: handleSfxChange,
      value: soundEffects,
      mode: "switch",
    },
    {
      category: "Other preferences",
      name: "Test sound",
      description: "Test it bruh",
      mode: "button",
      buttonFill: "Test if it works",
    },
  ];
  const settingsByCategory = settings.reduce(
    (grouped: SettingsByCategory, setting: Setting) => {
      (grouped[setting.category] = grouped[setting.category] || []).push(
        setting
      );
      return grouped;
    },
    {}
  );

  return {
    settingsByCategory,
  };
}
