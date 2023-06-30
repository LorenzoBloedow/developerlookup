"use client";
import gsap from "gsap";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import validateUsername from "../../util/validateUsername";
import UsernameInput from "./UsernameInput";
import useScreenSize from "../../hooks/useScreenSize";

const ProfileSearchInput = () => {
    const [username, setUsername] = useState("");
    const usernameInputRef = useRef<HTMLInputElement>(null);

    const [error, setError] = useState("");

    const router = useRouter();

    const screenWidth = useScreenSize().width;

    useEffect(() => {
        if (error !== "") {
            gsap.timeline()
            .to(usernameInputRef.current, {
                backgroundColor: "#ffb3b3",
                boxShadow: "0 10px 15px -3px #4e0000",
                duration: 0.7
            })
            .to(usernameInputRef.current, {
                backgroundColor: "var(--neu-mid)",
                boxShadow: "0 10px 15px -3px #94a3b8",
                duration: 0.7
            });
        }
    }, [error]);

    function submitHandler(e: SyntheticEvent) {
        e.preventDefault();

        if (!validateUsername(username)) {
            setError("The username provided is not a valid GitHub username.");
            return;
        }

        router.push(`/profile/${username}`);
    }

    function changeUsername(username: string) {
        setUsername(username);
    }

    useEffect(() => {
        // The border effect gets reset when the screen changes size,
        // because the border is off only when there's no focus, this should be called
        usernameInputRef.current?.blur();
    }, [screenWidth]);

    return (
        <div
        className="flex flex-col gap-2 xl:gap-10 items-center justify-center text-center
        bg-neu-mid p-4 shadow-black shadow-lg w-full h-60 rounded-xl
        lg:w-[70rem] lg:h-72 xl:w-[85rem] xl:h-96"
        style={{
            boxShadow: "9px 9px 13px var(--neu-dark), -9px -9px 30px var(--neu-light)"
        }}
        >
            <h1
            className="leading-snug text-sm md:text-lg lg:text-2xl xl:text-4xl
            font-bold mb-4 text-slate-700 xl:w-[60rem]"
            style={{
                textShadow: "9px 9px 6px var(--neu-dark), -9px -9px 6px var(--neu-light)"
            }}
            >
                Type your GitHub username, hit the button, and go grab some popcorn!
            </h1>

            <form
            className="flex flex-col"
            onSubmit={e => submitHandler(e)}
            >
                <UsernameInput
                username={username}
                changeUsername={changeUsername}
                ref={usernameInputRef}
                />
                <p
                className="text-red-800 text-xl h-4"
                style={{
                    visibility: error ? "visible" : "hidden"
                }}
                >
                    {error}
                </p>

                <button
                type="submit"
                className="rounded-full text-purple-500 font-bold tracking-widest px-4
                py-2 w-full cursor-pointer mt-4 bg-neu-accent-mid neu-button xl:text-2xl
                xl:py-4 xl:px-10"
                style={{
                    boxShadow: "9px 9px 13px var(--neu-accent-dark), -9px -9px 30px var(--neu-accent-light)"
                }}
                >
                    Look Up
                </button>
            </form>
        </div>
    );
}
 
export default ProfileSearchInput;