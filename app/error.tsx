"use client";

import { useRouter } from "next/navigation";
import { BsGithub } from "react-icons/bs";


function IllegalCharactersUsernameError({ goBack }: { goBack: () => void }) {
    return (
        <div className="fixed top-0 flex flex-col gap-8 text-center items-center justify-center w-[100vw] h-[100vh] bg-red-500">
            <div className="flex flex-col gap-5">
                <h1 className="text-9xl font-bold">
                    😬
                </h1>

                <h2 className="text-white text-6xl lg:text-5xl">The username you entered contains an illegal character.</h2>
            </div>
            
            <button
            onPointerUp={goBack}
            className="rounded-xl text-slate-700 tracking-wide border-2 border-slate-700 bg-slate-300 text-3xl px-9 py-2 hover:bg-slate-400 active:bg-slate-500"
            >
                Go back
            </button>
        </div>
    );
}

function RateLimitingError({ goBack }: { goBack: () => void }) {

    return (
        <div className="fixed top-0 text-center w-[100vw] h-[100vh] bg-red-500 flex items-center justify-center">
            <div className="flex flex-col items-center gap-5 p-10 pb-0">
                <h1 className="text-9xl font-bold">
                    😬
                </h1>

                <h2 className="text-white text-6xl">We've run out of API calls!</h2>
                <h3 className="text-white text-2xl">But you can get more by logging in with GitHub!</h3>

                <div className="flex gap-5">
                    <button
                    className="rounded-xl bg-slate-700 tracking-wide border-2 border-slate-300
                    text-slate-300 text-3xl px-9 py-4 hover:bg-slate-800 active:bg-slate-900 flex gap-5 items-center justify-center"
                    >
                        <BsGithub className="mr-auto text-center" />
                        <p>Log in</p>
                    </button>

                    <button
                    onPointerUp={goBack}
                    className="rounded-xl text-slate-700 tracking-wide border-2 border-slate-700 bg-slate-300 text-3xl px-9 py-2 hover:bg-slate-400 active:bg-slate-500"
                    >
                        Go back
                    </button>
                </div>
            </div>
        </div>
    );
}

function GenericError({ goBack }: { goBack: () => void }) {

    return (
        <div className="fixed top-0 flex flex-col gap-8 text-center items-center justify-center w-[100vw] h-[100vh] bg-red-500">
            <div className="flex flex-col gap-5">
                <h1 className="text-9xl font-bold">
                    😬
                </h1>

                <h2 className="text-white text-6xl lg:text-5xl">Something went wrong!</h2>
            </div>
            
            <button
            onPointerUp={goBack}
            className="rounded-xl text-slate-700 tracking-wide border-2 border-slate-700 bg-slate-300 text-3xl px-9 py-2 hover:bg-slate-400 active:bg-slate-500"
            >
                Go back
            </button>
        </div>
    );

}

const Error = ({ error, reset }: { error: Error & { digest: string }, reset: () => void }) => {
    const router = useRouter();

    fetch("/api/sendCrashLog", { method: "POST", body: JSON.stringify({ date: Date.now(), error }) });
    console.log("aha: " + JSON.stringify(error))

    function handleClick() {
        router.back();
        reset();
    }

    switch (error.digest) {
        case "1369542295":
            return <IllegalCharactersUsernameError goBack={handleClick} />
        case "3696060915":
            return <RateLimitingError goBack={handleClick} />
        case "403408307":
            return <RateLimitingError goBack={handleClick} />
        default:
            return <GenericError goBack={handleClick} />
    }
}
 
export default Error;