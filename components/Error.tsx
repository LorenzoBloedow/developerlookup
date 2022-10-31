import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

interface ErrorProps {
    error: string;
}
 
const Error: FunctionComponent<ErrorProps> = ({ error }) => {
    
    fetch("/api/sendCrashLog", { method: "POST", body: JSON.stringify({ date: Date.now(), error }) });
    const router = useRouter();

    return (
            <div className="flex flex-col gap-8 text-center items-center justify-center w-[100vw] h-[100vh] bg-red-500">
                <div className="flex flex-col gap-5">
                    <h1 className="text-9xl font-bold">
                        Oh no! 😱
                    </h1>

                    <h2 className="text-white text-6xl lg:text-5xl">Something went wrong!</h2>
                </div>

                <p className="text-gray-200 text-3xl">A crash log has been sent to the developer.</p>
                
                <button
                onPointerUp={router.back}
                className="rounded-xl text-slate-700 tracking-wide border-2 border-slate-700 bg-slate-300 text-3xl px-9 py-2 hover:bg-slate-400 active:bg-slate-500"
                >
                    Go back
                </button>
            </div>
    );
}
 
export default Error;