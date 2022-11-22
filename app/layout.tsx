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
            <body className="bg-gradient-to-b from-accent-one via-accent-six to-accent-ten flex flex-col gap-28 min-h-screen">
                    <Navbar />
                    <div className="flex-1">
                        { children }
                    </div>
                    
                    <Footer />
                <AnalyticsWrapper />
            </body>
        </html>

    );
}

export default RootLayout;