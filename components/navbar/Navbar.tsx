import Button from "./Button";
import { TbBrandTwitterFilled } from "react-icons/tb";
import Link from "next/link";

const Navbar = () => {
 
    return (
        <nav
        className="bg-neu-mid h-16 md:h-20 lg:h-28 flex w-full
        items-center gap-4 p-4 md:p-6 lg:px-12 rounded-2xl"
        style={{
            boxShadow: "9px 9px 13px var(--neu-dark), -9px -9px 30px var(--neu-light)"
        }}
        >
            <Link
            href="/"
            style={{
                textShadow: "9px 9px 6px var(--neu-dark), -9px -9px 6px var(--neu-light)"
            }}
            className="text-sm md:text-lg lg:text-xl tracking-widest mr-auto
            text-slate-700 text-start font-extrabold"
            >
                Developer
                <br />
                Lookup
            </Link>
            
            <Button
            icon={
                <TbBrandTwitterFilled
                className="w-4 h-4 md:w-7 md:h-7"
                />
            }
            text="Follow Me"
            href="https://twitter.com/intent/follow?screen_name=LorenzoBloedow"
            />

            {/* <Button
            text="⭐ Premium"
            href="/donate"
            /> */}
        </nav>
    );
}
 
export default Navbar;