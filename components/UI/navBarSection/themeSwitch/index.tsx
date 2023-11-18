"use client";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi";
import styles from './theme.module.css'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  //{
  //theme === "light" ?
  console.log(theme);
  
  return (
    <div className="w-[4.5rem] mx-auto flex justify-between p-1 rounded-full space-x-1 border border-black dark:border-white">
      <button
        className={theme==='light'?`${styles.activeThemeBtn}`:`${styles.switchThemeBtn}`}
        onClick={() => setTheme("light")}
      >
        <BiSun />
      </button>
      <button
        className={theme==='dark'?`${styles.activeThemeBtn}`:`${styles.switchThemeBtn}`}
        onClick={() => setTheme("dark")}
      >
        <BiMoon />
      </button>
    </div>

  );
}