"use client";
import { useEffect, useState } from "react";

export default function useScreenSize() {
    const [size, setSize] = useState({ width: 1920, height: 1080, availableWidth: 1920, availableHeight: 1080 });

    function setCurrentSize() {
        setSize({
            width: window.outerWidth,
            height: window.outerHeight,
            availableWidth: document.body.clientWidth,
            availableHeight: document.body.clientHeight,
        });
    }

    useEffect(() => {
        setCurrentSize();

        window.addEventListener("resize", setCurrentSize);

        return () => {
            window.removeEventListener("resize", setCurrentSize);
        }
    }, []);

    return size;
}