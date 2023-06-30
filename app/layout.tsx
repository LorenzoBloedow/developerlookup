import "../styles/globals.css";
import { FunctionComponent, ReactNode } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { Prompt } from "next/font/google";
import { Metadata } from "next";

const prompt = Prompt({
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "DeveloperLookup",
    keywords: ["GitHub", "Visualizer", "Developer", "Lookup", "Profile"],
    applicationName: "DeveloperLookup"
}

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => {

    return (
        <html lang="en" className={prompt.className}>
            <body className="bg-[--neu-mid] flex flex-col min-h-screen p-4">
                <Navbar />
                    {children}
                <Footer />
            </body>
        </html>
    );
}

export default RootLayout;