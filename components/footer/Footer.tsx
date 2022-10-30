import { FunctionComponent } from "react";
import Header from "./Header";

interface FooterProps {
    
}
 
const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <footer className="absolute bottom-0 h-60 bg-accent-one w-full border-t-2 border-t-black flex p-8">
            <div className="flex w-full justify-around">
                <Header text="CONTACT" />

                <Header text="MORE" />
            </div>
        </footer>
    );
}
 
export default Footer;