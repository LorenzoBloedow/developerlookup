import Link from "next/link";

function RepoLink({ repoName, repoUrl }: { repoName: string, repoUrl: string }) {
    return (
        <Link
        href={repoUrl}
        className="text-xs text-blue-500 font-bold w-36 truncate"
        >
            {repoName}
        </Link>
    );
}
export default RepoLink;