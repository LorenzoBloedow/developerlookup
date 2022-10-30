"use client"

import React, { FunctionComponent } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "../styles/globals.css"
import { Prompt } from "@next/font/google";
import { AnalyticsWrapper } from "../components/AnalyticsWrapper";

interface RootLayoutProps {
    children: React.ReactNode;
}

const prompt = Prompt({
    subsets: ["latin"],
    weight: "400",
});

const RootLayout: FunctionComponent<RootLayoutProps> = ({ children }) => {

    return (
        <html lang="en" className={prompt.className}>
            <head>
                <meta name="keywords" content="GitHub, Visualizer, Developer, Lookup, Profile" />
                <meta name="application-name" content="DeveloperLookup" />
            </head>

            <body>
                <Navbar />
                <div className="bg-gradient-to-b from-accent-one via-accent-six to-accent-ten w-full h-[140%] absolute top-0 -z-[999999]">
                <Footer />
                </div>
                
                { children }
                <AnalyticsWrapper />
            </body>
        </html>

    );
}



export default RootLayout;