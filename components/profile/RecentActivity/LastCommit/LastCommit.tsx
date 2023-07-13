import { IoMdGitCommit } from "react-icons/io";
import formatDate from "../../../../util/formatDate";
import getRecentData from "../../../../util/getRecentData";
import RepoLink from "./RepoLink";
import BypassErrorSerialization from "../../../BypassErrorSerialization";

async function LastCommit({ username }: { username: string }) {
    const result = await getRecentData(username);
    
    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            {
                (result.success) &&
                <div
                className="flex flex-col gap-1 items-center justify-center leading-snug"
                >
                    <IoMdGitCommit className="w-12 h-12 text-slate-500" />
                    <div>
                        <p className="text-sm md:text-base">Last commit: </p>
                        <p className="text-xs md:text-sm">
                            {
                                result.data.lastCommit?.date ?
                                formatDate(result.data.lastCommit.date, "short")
                                :
                                `${username} hasn't made any commits in the last 90 days`
                            }
                        </p>
                    </div>
                    {
                        result.data.lastCommit?.date &&
                        <RepoLink
                        repoName={result.data.lastCommit.name}
                        repoUrl={result.data.lastCommit.url}
                        />
                    }
                </div>
            }
        </>
    );
}

export default LastCommit;