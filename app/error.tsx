"use client";
import { usePathname, useRouter } from "next/navigation";
import { BsGithub } from "react-icons/bs";
import { ApiError } from "../types";
import getAuthUrl from "../util/getAuthUrl";

function IllegalCharactersUsernameError({ goBack }: { goBack: () => void }) {
    return (
        <div
        className="fixed top-0 flex flex-col gap-6 text-center items-center
        justify-center w-[100vw] h-[100vh] bg-red-500 p-10"
        >
            <div className="flex flex-col gap-3">
                <span className="text-9xl font-bold">
                    😬
                </span>

                <h1 className="text-white text-2xl lg:text-5xl">
                    The username you entered is not a valid GitHub username
                </h1>
            </div>
            
            <button
            onPointerUp={goBack}
            className="rounded-xl text-slate-700 tracking-wide border-2 border-slate-700
            bg-slate-300 text-sm px-4 py-2 hover:bg-slate-400 active:bg-slate-500"
            >
                Go back
            </button>
        </div>
    );
}

function RateLimitingError({ goBack }: { goBack: () => void }) {
    const path = usePathname();
    const authString = getAuthUrl(path);

    return (
        <div className="fixed top-0 text-center w-[100vw] h-[100vh] bg-red-500 flex items-center justify-center">
            <div className="flex flex-col items-center gap-5 p-10">
                <span
                className="text-9xl font-bold"
                >
                    😬
                </span>

                <div>
                    <h1 className="text-white text-2xl">We've run out of API calls!</h1>
                    <h2 className="text-white">But you can get more by logging in with GitHub!</h2>
                </div>

                <div className="flex gap-5">
                    <button
                    className="rounded-xl bg-slate-700 tracking-wide border-2 border-slate-300
                    text-slate-300 text-sm px-4 py-2 hover:bg-slate-800 active:bg-slate-900
                    flex gap-2 items-center justify-center"
                    onPointerUp={() => location.href = authString}
                    >
                        <BsGithub
                        className="w-4 h-4"
                        />
                        <p>Log In</p>
                    </button>

                    <button
                    onPointerUp={goBack}
                    className="rounded-xl text-slate-700 tracking-wide border-2 border-slate-700
                    bg-slate-300 text-sm px-4 py-2 hover:bg-slate-400 active:bg-slate-500"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}

function GenericError({ message, goBack }: { message?: string, goBack: () => void }) {
    
    return (
        <div
        className="fixed top-0 left-0 flex flex-col gap-8 text-center items-center
        justify-center w-[100vw] h-[100vh] bg-red-500 p-10"
        >
            <div className="flex flex-col items-center gap-5">
                <span className="text-9xl font-bold">
                    😬
                </span>

                <h1 className="text-white text-2xl sm:text-3xl sm:w-52 lg:text-5xl">
                    { message || "Something went wrong!" }
                </h1>
            </div>
            
            <button
            onPointerUp={goBack}
            className="rounded-xl text-slate-700 tracking-wide border-2
            border-slate-700 bg-slate-300 text-xl px-9 py-2 hover:bg-slate-400
            active:bg-slate-500"
            >
                Go Back
            </button>
        </div>
    );

}

const Error = ({ error }: { error: ApiError & { digest?: string }, reset: () => void }) => {
    const router = useRouter();
    function handleClick() {
        router.back();
    }

    // For errors that were thrown in a server component instead of being caught and thrown in a client component
    const isServerNotHandled = !!error?.digest;
    
    if (isServerNotHandled) {
        return <GenericError goBack={handleClick} />
    }
    
    switch (error?.data?.code) {
        case "invalidUsername":
            return <IllegalCharactersUsernameError goBack={handleClick} />
        case "rateLimited":
            return <RateLimitingError goBack={handleClick} />
        default:
            return <GenericError message={error?.data?.message} goBack={handleClick} />
    }
}
 
export default Error;