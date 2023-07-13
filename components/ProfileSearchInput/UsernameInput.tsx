"use client";
import gsap from "gsap";
import { forwardRef, useEffect, useRef } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import createRoundedRectPath from "../../util/createRoundedRectPath";
import CharacterCounter from "./CharacterCounter";

interface UsernameInputProps {
    username: string;
    changeUsername: (username: string) => void;
}

const UsernameInput = forwardRef<HTMLInputElement, UsernameInputProps>(function UsernameInput({ username, changeUsername }, ref) {
    const borderRef = useRef<SVGRectElement>(null);

    // This whole section is needed instead of relying on 'preserveAspectRatio: none' because
    // 'preserveAspectRatio' makes it distorted, with some parts thicker than others
    // but 'preserveAspectRatio: none' is still used to try and handle edge cases
    const pageWidth = useScreenSize().width;

    let borderWidth = 240;
    borderWidth = (pageWidth > 373) ? 320 : borderWidth;
    borderWidth = (pageWidth > 1278) ? 560 : borderWidth;
    
    const borderHeight = (pageWidth > 1278) ? 80 : 56;
    const borderDashAndOffset = (borderWidth * 2) + (borderHeight * 2);
    const borderMiddleX = borderWidth / 2;

    useEffect(() => {
        gsap
        .set(borderRef.current, {
            strokeDashoffset: borderDashAndOffset
        });
    }, [borderDashAndOffset]);

    return (
        <div
        className="flex flex-col items-center gap-2 w-60 md:w-80 xl:w-[35rem]"
        >
            <div
            className="relative h-10 w-full xl:h-16 flex flex-col gap-2"
            >
                <input
                onKeyUp={e => {
                    if (e.key === "Enter") {
                        gsap
                        .to(borderRef.current, {
                            strokeDashoffset: borderDashAndOffset,
                            duration: 0.5,
                            ease: "power3.out"
                        });
                    }
                }}
                ref={ref}
                onInput={e => changeUsername(e.currentTarget.value)}
                onFocus={() => {
                    gsap
                    .to(borderRef.current, {
                        strokeDashoffset: 0,
                        duration: 0.5,
                        ease: "power3.out"
                    });
                }}
                onBlur={() => {
                    gsap
                    .to(borderRef.current, {
                        strokeDashoffset: borderDashAndOffset,
                        duration: 0.5,
                        ease: "power3.out"
                    });
                }}
                type="text"
                className="w-full p-2 text-center bg-neu-mid h-full rounded-xl
                text-black placeholder-opacity-75 focus:outline-none
                xl:text-2xl xl:p-6"
                style={{
                    boxShadow: "9px 9px 13px var(--neu-dark), -9px -9px 30px var(--neu-light)"
                }}
                placeholder="octocat"
                />
                <svg
                preserveAspectRatio="none"
                viewBox={`0 0 ${borderWidth} ${borderHeight}`}
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none"
                >
                    <path
                    ref={borderRef}
                    strokeDasharray={borderDashAndOffset}
                    strokeDashoffset={borderDashAndOffset}
                    width="100%"
                    height="100%"
                    strokeWidth={4}
                    stroke="#a855f7"
                    fill="none"
                    d={createRoundedRectPath(0, 0, borderWidth, borderHeight, 12, borderMiddleX)}
                    />
                </svg>
            </div>

            <div
            className="mx-4"
            >
                <CharacterCounter
                characterCount={username.length}
                />
            </div>
        </div>
    );
});

export default UsernameInput;