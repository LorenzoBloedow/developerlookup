"use client";

import { RiGitRepositoryFill } from "react-icons/ri";
import getEventDescription from "../../../../util/getEventDescription";

interface RepoProps {
    repoName: string;
    repoAction: string;
    date: JSX.Element;
    repoUrl: string;
}

function Repo({ repoName, repoAction, date, repoUrl }: RepoProps) {
    return (
        <div
        className="flex gap-3 items-center"
        onPointerUp={() => location.href = repoUrl}
        >
            <div
            className="flex flex-col items-center
            justify-center gap-1"
            >
                <RiGitRepositoryFill
                color="#52280e"
                className="w-12 h-12 md:w-16 md:h-16"
                />
                <p
                className="text-xs font-bold break-all w-20 truncate
                md:text-sm md:w-28"
                >
                    {repoName}
                </p>
            </div>
            
            <div
            className="flex flex-col w-44"
            >
                <p className="text-sm md:text-base">- {getEventDescription(repoAction)}</p>
                {date}
            </div>
        </div>
    );
}

export default Repo;