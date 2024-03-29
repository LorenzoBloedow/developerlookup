"use client";
import { FaGithubSquare } from "react-icons/fa";

function GitHubSquare({ username }: { username: string }) {
    return (
        <button
        className="w-full h-full"
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