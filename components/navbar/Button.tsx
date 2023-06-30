import gsap from "gsap";
import Link from "next/link";
import { FunctionComponent } from "react";

interface ButtonProps {
    href: string,
    text: string,
    icon: JSX.Element;
}
 
const Button: FunctionComponent<ButtonProps> = ({ href, text, icon }) => {

    return (
        <Link
        href={href}
        className="text-slate-700 p-2 rounded-md text-xs flex
        items-center gap-4 whitespace-nowrap lg:text-xl
        font-bold md:text-lg md:py-3 md:px-8 neu-button"
        style={{
            boxShadow: "7px 7px 16px var(--neu-dark), -7px -7px 16px var(--neu-light)"
        }}
        >
            {icon} {text}
        </Link>
    );
}
 
export default Button;