import "../styles/globals.css";
import { FunctionComponent, ReactNode } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { Prompt } from "next/font/google";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import isProd from "../util/isProd";

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
            <body className="bg-[--neu-mid] flex flex-col items-center min-h-screen gap-16 justify-between p-4">
                <Navbar />
                    {children}
                <Footer />
                
                <Analytics
                mode={isProd ? "production" : "development"}
                />
            </body>
        </html>
    );
}

export default RootLayout;