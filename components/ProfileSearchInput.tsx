"use client";
import gsap from "gsap";
import { FunctionComponent, SyntheticEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import useIsDesktop from "../hooks/useIsDesktop";

interface ProfileSearchInputProps {
    
}

const usernameRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

const ProfileSearchInput: FunctionComponent<ProfileSearchInputProps> = () => {
    const [error, setError] = useState("");
    const usernameInputRef = useRef(null);

    const typeTextRef = useRef(null);
    const yourTextRef = useRef(null);
    const githubTextRef = useRef(null);
    const restTextRef = useRef(null);
    const invisibleDivRef = useRef<HTMLDivElement>(null);

    const router = useRouter();

    const isDesktop = useIsDesktop();

    const tl = gsap.timeline({ paused: true });
    tl
    .to(usernameInputRef.current, {
        backgroundColor: "red",
        boxShadow: "0 10px 15px -3px #4e0000",
        duration: 0.7
    })
    .to(usernameInputRef.current, {
        backgroundColor: "white",
        boxShadow: "0 10px 15px -3px #94a3b8",
        duration: 0.7
    })

    useEffect(() => {
        if (error !== "") {
            tl.play();
        }
    }, [error])

    function changeText() {
        // @ts-ignore
        typeTextRef.current.innerText = "Are";

        // @ts-ignore
        yourTextRef.current.innerText = " you";

        // @ts-ignore
        githubTextRef.current.innerText = " ready?";

        // @ts-ignore
        restTextRef.current.innerText = " 😎"
    }

    function revertTextChange() {
        // @ts-ignore
        typeTextRef.current.innerText = "Type";

        // @ts-ignore
        yourTextRef.current.innerText = " your";

        // @ts-ignore
        githubTextRef.current.innerText = " GitHub";

        // @ts-ignore
        restTextRef.current.innerText = " username, hit the button and go grab some popcorn! 🍿";
    }

    function hoverHandler() {
        if (!isDesktop) {
            return;
        }
        // Log analytics event.
        changeText();
        // @ts-ignore
        invisibleDivRef.current.style.display = "block";
    }

    function hoverOutHandler() {
        if (!isDesktop) {
            return;
        }
        // Log analytics event.

        revertTextChange();
        // @ts-ignore
        invisibleDivRef.current.style.display = "none";
    }

    function submitHandler(e: SyntheticEvent) {
        e.preventDefault();
        // @ts-ignore
        const username = usernameInputRef.current.value;

        // @ts-ignore
        if (!usernameRegex.test(username)) {
            setError("The username provided is not a valid GitHub username.");
            return;
        }

        router.push(`/${username}`);
    }


    return (<div className="flex flex-col gap-10 text-5xl items-center justify-center text-center bg-blue-500 p-16 shadow-black shadow-lg w-full absolute">
                <h1
                className="leading-snug lg:text-7xl"
                >
                    <span ref={typeTextRef} className="underline">Type</span>
                    <span ref={yourTextRef}> your</span>
                    <span ref={githubTextRef} className="font-bold"> GitHub</span>
                    <span ref={restTextRef}> username, hit the button and go grab some popcorn! 🍿</span>
                </h1>

                    <div ref={invisibleDivRef} className="hidden"><h1 className="text-2xl text-transparent">sdlfkjl</h1></div>

                    <form
                    className="flex flex-col items-center gap-5"
                    onSubmit={e => submitHandler(e)}
                    >
                        <div className="flex flex-col items-center gap-2 w-full">
                            <input
                            autoFocus
                            ref={usernameInputRef}
                            type="text"
                            className="w-full shadow-lg shadow-slate-400 rounded-3xl h-20 p-8 focus:outline-8 text-center
                            text-black placeholder-opacity-75"
                            placeholder="octocat"
                            />
                            
                            { error ? <p className="text-red-800 text-xl">{error}</p> : <div className="h-12" /> }
                        </div>

                        <input
                        type="submit"
                        value="Lookup"
                        onPointerOver={hoverHandler}
                        onPointerOut={hoverOutHandler}
                        className="rounded-3xl shadow-black shadow-lg bg-accent-one h-20 text-white font-bold tracking-wider px-12 cursor-pointer"
                        />
                    </form>
            </div>);
}
 
export default ProfileSearchInput;