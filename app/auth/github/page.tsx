"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, ReactNode } from "react";
import Spinner from "../../../components/Spinner";
import { authenticateUser } from "../../../util/getOctokit";

interface AuthSubtitleProps {
    children: ReactNode;
}
function AuthSubtitle({ children }: AuthSubtitleProps) {
    return (
        <h2 className="text-sm md:text-lg h-10">
            {children}
        </h2>
    );
} 

interface AuthTitleProps {
    children: ReactNode;
}
function AuthTitle({ children }: AuthTitleProps) {
    return (
        <h1 className="text-3xl md:text-5xl font-bold">
            {children}
        </h1>
    );
}

function getJitTailwindAuthBackground(accent: AuthAccent) {
    switch (accent) {
        case "green":
            return "bg-neu-accent-green-mid";
        case "orange":
            return "bg-neu-accent-orange-mid";
        case "red":
            return "bg-neu-accent-red-mid";
    }
}

type AuthAccent = "green" | "orange" | "red";

interface AuthButtonProps {
    accent: AuthAccent;
    onPointerUp: () => void;
    children: ReactNode;
}
function AuthButton({ accent, onPointerUp, children }: AuthButtonProps) {
    const tailwindJitBackground = getJitTailwindAuthBackground(accent);

    return (
        // This avoids layout shift
        <div
        className="w-full h-14 sm:h-20 justify-self-end flex"
        >
            <button
            className={`${tailwindJitBackground} rounded-xl text-xs p-4
            px-8 tracking-widest font-bold w-full neu-button mt-auto self-end`}
            style={{
                boxShadow: `9px 9px 13px var(--neu-accent-${accent}-dark), -9px -9px 30px var(--neu-accent-${accent}-light)`
            }}
            onPointerUp={onPointerUp}
            >
                {children}
            </button>
        </div>
    );
}

interface AuthContainerProps {
    accent: "green" | "orange" | "red";
    children: ReactNode;
}
function AuthContainer({ accent, children }: AuthContainerProps) {
    const tailwindJitBackground = getJitTailwindAuthBackground(accent);

    return (
        <div
        className={`${tailwindJitBackground} flex flex-col text-slate-700
        gap-5 items-center justify-center p-6 sm:p-8 md:p-11 text-center rounded-xl
        w-72 sm:w-80 md:w-[35rem] md:h-80`}
        style={{
            boxShadow: `9px 9px 13px var(--neu-accent-${accent}-dark), -9px -9px 30px var(--neu-accent-${accent}-light)`
        }}
        >
            {children}
        </div>
    );
}

function Page() {
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        authenticateUser(searchParams?.get?.("code"))
        .then(() => setLoading(false))
        .catch(() => setError(true));
    }, []);

    if (error) {
        return (
            <AuthContainer
            accent="red"
            >
                <div>
                    <AuthTitle>
                        Oops...
                    </AuthTitle>
                    <AuthSubtitle>
                        Authentication failed. Is your URL being modified?
                    </AuthSubtitle>
                </div>

                <AuthButton
                accent="red"
                onPointerUp={() => location.href = searchParams?.get?.("prev") ?? "/"}
                >
                    Go back
                </AuthButton>
            </AuthContainer>
        )
    }

    if (loading) {
        return (
            <AuthContainer
            accent="orange"
            >
                <div>
                    <AuthTitle>
                        Authenticating...
                    </AuthTitle>
                    <AuthSubtitle>
                        Please wait, this won't take long!
                    </AuthSubtitle>
                </div>

                <Spinner
                className="w-20 h-14 sm:h-20"
                color="#4d4d4d"
                />
            </AuthContainer>
        );
    }

    return (
        <AuthContainer
        accent="green"
        >
            <div>
                <AuthTitle>
                    Congratulations!
                </AuthTitle>
                <AuthSubtitle>
                    You've succesfully authenticated with GitHub!
                </AuthSubtitle>
            </div>

            <AuthButton
            accent="green"
            onPointerUp={() => location.href = searchParams?.get?.("prev") ?? "/"}
            >
                Continue
            </AuthButton>
        </AuthContainer>
    );
}

export default Page;