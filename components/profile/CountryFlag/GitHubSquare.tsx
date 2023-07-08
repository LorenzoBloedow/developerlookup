"use client";
import { FaGithubSquare } from "react-icons/fa";

function GitHubSquare({ username }: { username: string }) {
    return (
        <button
        className="w-10 h-10"
        onPointerUp={() => location.assign(`https://github.com/${username}`)}
        >
            <FaGithubSquare
            aria-label="The GitHub logo"
            className="w-full h-full"
            />
        </button>
    );
}

export default GitHubSquare;