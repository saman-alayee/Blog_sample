"use client";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";
import styles from './theme.module.css'
import { useState } from "react";

type switchBtn = (themeChange: string, activeChange: boolean) => void



export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState(true)
  const setBtn: switchBtn = (themeChange, activeChange) => {
    setTheme(themeChange)
    setActive(activeChange)
  }
  return (
    <div className="w-[4.5rem] mx-auto flex justify-between p-1 rounded-full space-x-1 border border-black dark:border-white">
      <button
        className={active ? styles.activeThemeBtn : styles.switchThemeBtn}
        onClick={() => setBtn("light", true)}
      >
        <BiSun />
      </button>
      <button
        className={active ? styles.switchThemeBtn : styles.activeThemeBtn}
        onClick={() => setBtn("dark", false)}
      >
        <BiMoon />
      </button>
    </div>

  );
}