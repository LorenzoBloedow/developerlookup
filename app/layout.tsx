import { FunctionComponent } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface RootLayoutProps {
    children: React.ReactNode;
}
 
const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => {

    return (
        <html lang="en">
            <head>
                <meta name="keywords" content="GitHub, Visualizer, Developer, Lookup, Profile" />
                <meta name="application-name" content="DeveloperLookup" />
            </head>
            
            <body>
                <Navbar />
                { children }
                <Footer />
            </body>
        </html>

    );
}
 
export default RootLayout;