import Link from "next/link";
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer
        className="w-full rounded-xl flex gap-10 justify-center p-6"
        style={{
            boxShadow: "9px 9px 13px var(--neu-dark), -9px -9px 30px var(--neu-light)"
        }}
        >
            <Link
            href="https://www.linkedin.com/in/lorenzobloedow"
            >
                <FaLinkedin
                className="w-12 h-12 bg-neu-mid p-2 rounded-md fill-slate-700 neu-button"
                style={{
                    boxShadow: "9px 9px 13px var(--neu-dark), -9px -9px 30px var(--neu-light)"
                }}
                />
            </Link>
            
            <Link
            href="https://twitter.com/intent/follow?screen_name=LorenzoBloedow"
            >
                <FaTwitterSquare
                className="w-12 h-12 bg-neu-mid p-2 rounded-md fill-slate-700 neu-button"
                style={{
                    boxShadow: "9px 9px 13px var(--neu-dark), -9px -9px 30px var(--neu-light)"
                }}
                />
            </Link>

            <Link
            href="https://github.com/LorenzoBloedow"
            >
                <FaGithubSquare
                className="w-12 h-12 bg-neu-mid p-2 rounded-md fill-slate-700 neu-button"
                style={{
                    boxShadow: "9px 9px 13px var(--neu-dark), -9px -9px 30px var(--neu-light)"
                }}
                />
            </Link>
        </footer>
    );
}
 
export default Footer;