import gsap from "gsap";
import Link from "next/link";
import { FunctionComponent, Ref, useRef } from "react";

interface ButtonProps {
    href: string,
    text: string
}
 
const Button: FunctionComponent<ButtonProps> = ({ href, text }) => {
    const tl = gsap.timeline({ paused: true });

    const tl2 = gsap.timeline({ paused: true });    

    function hoverHandler() {
        // Log analytics event.
        tl.play();
    }

    function hoverOutHandler() {
        // Log analytics event.
        tl.reverse();
    }

    return (
        <Link
        tabIndex={-1}
        href={href}
        className="text-white p-4 px-10 rounded-2xl text-5xl flex items-center justify-center border-white border-4 whitespace-nowrap"
        onPointerOver={() => hoverHandler()}
        onPointerOut={() => hoverOutHandler()}
        ref={node => {
            tl.to(node, {
                border: "4px solid #4858fa",
                boxShadow: "10px 10px 3px #330232",
                duration: 0.2,
                ease: "ease.out",
                background: "linear-gradient(180deg, #ff61ab, #fd3693)"
            });
        }}
        >
            {text}
        </Link>
    );
}
 
export default Button;