"use client";
import { useTheme } from "next-themes";
import { BsMoon } from "react-icons/bs";
import { BiSun } from "react-icons/bi";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={`flex justify-center items-center w-8 h-8 md:w-9 md:h-9 md:text-xl rounded-md hover:scale-110 active:scale-100 duration-200 dark:bg-slate-200 dark:text-black bg-[#212933] text-white`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <BiSun /> : <BsMoon />}
    </button>
  );
};