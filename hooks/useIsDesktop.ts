import "client-only";
import { useEffect, useState } from "react";

export default function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(false);

    function matchDesktop() {
        if (window.matchMedia("(min-width: 1080px)").matches) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        }
    }

    useEffect(() => {
        matchDesktop();
    }, []);

    useEffect(() => {
        window.addEventListener("resize", matchDesktop);
        return () => {
            window.removeEventListener("resize", matchDesktop);
        }
    }, [])


    return isDesktop;
}