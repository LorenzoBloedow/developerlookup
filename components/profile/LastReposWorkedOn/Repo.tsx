"use client";

import { RiGitRepositoryFill } from "react-icons/ri";
import getEventDescription from "../../../util/getEventDescription";

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
                <RiGitRepositoryFill color="#52280e" className="h-12 w-12" />
                <p className="text-xs font-bold break-all w-20 truncate">{repoName}</p>
            </div>
            
            <div
            className="flex flex-col w-32"
            >
                <p className="text-sm">- {getEventDescription(repoAction)}</p>
                {date}
            </div>
        </div>
    );
}

export default Repo;