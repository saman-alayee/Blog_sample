"use client"
import { ThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { useEffect, useState } from "react";

export function NextThemeProvider({ children }: ThemeProviderProps) {
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return <>{children}</>
    }
    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}