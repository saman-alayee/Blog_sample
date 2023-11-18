"use client"
import { useState } from "react";

export const CheckWidth = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const MOBILE_THRESHOLD: number = 768
  
    function updateSize(): void {
      setIsMobile(window.innerWidth < MOBILE_THRESHOLD);
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateSize);
    }
    return isMobile

};

