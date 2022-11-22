"use client"
import { FunctionComponent, useRef } from "react";
import { Archivo_Black } from "@next/font/google";
import Button from "./Button";
import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import useIsDesktop from "../../hooks/useIsDesktop";

interface NavbarProps {
    
}

const archivoBlack = Archivo_Black({
    subsets: ["latin"],
    weight: "400"
}) 

const Navbar: FunctionComponent<NavbarProps> = () => {

    const isDesktop = useIsDesktop();
    const router = useRouter();
    const pathName = usePathname();

    const tl = gsap.timeline({ paused: true });


    const developerRef = useRef<HTMLSpanElement>(null);
    const lookupRef = useRef<HTMLSpanElement>(null);

    function hoverHandler() {
        // Log analytics event.
        if (isDesktop) {
            tl.play();
        }
    }

    function hoverOutHandler() {
        // Log analytics event.
        if (isDesktop) {
            tl.reverse();
        }
    }

    function logoHandler() {
        // Log analytics event.
        if (pathName === "/") {
            window.location.reload();
        } else {
            router.replace("/");
        }
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
                onPointerUp={logoHandler}
                >
                    Developer
                </span>
                <br />
                <span
                ref={lookupRef}
                onPointerEnter={() => hoverHandler()}
                onPointerOut={() => hoverOutHandler()}
                onPointerUp={logoHandler}
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
            text="⭐ Premium"
            href="/donate"
            />
        </nav>
    );
}
 
export default Navbar;