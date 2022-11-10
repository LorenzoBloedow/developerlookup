import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Archivo_Black } from "@next/font/google";
import Button from "./Button";
import gsap from "gsap";

interface NavbarProps {
    
}

const archivoBlack = Archivo_Black({
    subsets: ["latin"],
    weight: "400"
}) 

const Navbar: FunctionComponent<NavbarProps> = () => {

    const tl = gsap.timeline({ paused: true });

    const developerRef = useRef<HTMLSpanElement>(null);
    const lookupRef = useRef<HTMLSpanElement>(null);

    const [logoColors, setLogoColors] = useState(false);

    useEffect(() => {
        if (logoColors) {
            gsap.to(developerRef.current, {
                color: "black",
                duration: 0.5
            });
            gsap.to(lookupRef.current, {
                color: "white",
                duration: 0.5
            });
        } else {
            gsap.to(developerRef.current, {
                color: "white",
                duration: 0.5
            });
            gsap.to(lookupRef.current, {
                color: "black",
                duration: 0.5
            });
        }
    }, [logoColors]);

    function hoverHandler() {
        // Log analytics event.
        tl.play();
    }

    function hoverOutHandler() {
        // Log analytics event.
        tl.reverse();
    }

    function clickHandler() {
        // Log analytics event.
        hoverOutHandler();
        setLogoColors(prev => !prev);
    }

    return (
        <nav
        className="bg-accent-one shadow-black shadow-lg h-[20%] md:h-32 p-4 px-8 flex items-center justify-end gap-10"
        >
            <h1
            aria-label="DeveloperLookup.com's logo."
            style={archivoBlack.style}
            className="text-3xl lg:text-4xl tracking-widest mr-auto text-white"

            ref={node => {
                tl.to(node, {
                    letterSpacing: "50px",
                    duration: 0.3,
                    ease: "power4.out"
                })
            }}
            >
                <span
                ref={developerRef}
                className="cursor-pointer"
                onPointerEnter={() => hoverHandler()}
                onPointerOut={() => hoverOutHandler()}
                onPointerUp={() => clickHandler()}
                >
                    Developer
                </span>
                <br />
                <span
                ref={lookupRef}
                onPointerEnter={() => hoverHandler()}
                onPointerOut={() => hoverOutHandler()}
                onPointerUp={() => clickHandler()}
                className="text-black underline underline-offset-4 cursor-pointer"
                >
                    Lookup
                </span>
            </h1>
            
            <Button
            text="🔗 Share"
            href="/share"
            />

            <Button
            text="❤️ Donate"
            href="/donate"
            />
        </nav>
    );
}
 
export default Navbar;