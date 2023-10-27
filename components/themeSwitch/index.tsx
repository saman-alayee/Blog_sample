"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoon } from "react-icons/bs"
import { BiSun } from "react-icons/bi"


export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();


    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }


    return (
        <button
            className={`flex justify-center items-center md:w-7 md:h-7 w-7 h-7 rounded-md hover:scale-110 active:scale-100 duration-200 dark:bg-slate-200 dark:text-black bg-[#212933] text-white`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "light" ? <BsMoon /> : <BiSun />}
        </button>
    );
};