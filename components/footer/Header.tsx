import { FunctionComponent } from "react";

interface HeaderProps {
    text: string
}
 
const Header: FunctionComponent<HeaderProps> = ({ text }) => {
    return (
        <h1 className="text-4xl font-bold tracking-widest">
            {text}
        </h1>
    );
}
 
export default Header;