import { FunctionComponent } from "react";

interface ProfileSearchInputProps {
    
}

const githubUsernameRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

const ProfileSearchInput: FunctionComponent<ProfileSearchInputProps> = () => {
    return (
        <div className="flex flex-col gap-10 text-5xl items-center justify-center text-center bg-blue-500 p-16 shadow-black shadow-lg">
            <h1
            className="leading-snug lg:text-7xl"
            >
                <span className="underline">Type</span> your <span className="font-bold">GitHub</span> username, hit the button and go grab some popcorn! 🍿
            </h1>

                <form className="flex lg:flex-col items-center justify-center gap-16 lg:gap-10">
                    <input
                    type="text"
                    className="w-[70%] shadow-lg shadow-slate-400 rounded-3xl bg-accent-nine h-20 caret-accent-seven p-8 focus:outline-8 focus:outline-accent-seven text-center
                    text-black placeholder-black"
                    placeholder="YourUsername"
                    />

                    <input
                    type="submit"
                    value="Lookup"
                    className="rounded-3xl shadow-slate-400 shadow-lg bg-accent-one h-20 text-white font-bold tracking-wider px-12"
                    />
                </form>
        </div>

    );
}
 
export default ProfileSearchInput;