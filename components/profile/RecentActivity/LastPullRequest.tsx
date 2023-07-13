import { VscGitPullRequest } from "react-icons/vsc";
import formatDate from "../../../util/formatDate";
import getRecentData from "../../../util/getRecentData";
import RepoLink from "../RepoLink";
import BypassErrorSerialization from "../../BypassErrorSerialization";

async function LastPullRequest({ username }: { username: string }) {
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
                    <VscGitPullRequest className="w-12 h-12 md:w-16 md:h-16 text-slate-500 mb-3" />
                    <div>
                        <p className="text-sm md:text-base">Last pull request: </p>
                        <p className="text-xs md:text-sm">
                            {
                                result.data.lastPullRequest?.date ?
                                formatDate(result.data.lastPullRequest.date, "short")
                                :
                                `${username} hasn't made any PRs in the last 90 days`
                            }
                        </p>
                    </div>
                    {
                        result.data.lastPullRequest?.date &&
                        <RepoLink
                        repoName={result.data.lastPullRequest.name}
                        repoUrl={result.data.lastPullRequest.url}
                        />
                    }
                </div>
            }
        </>
    );
}

export default LastPullRequest;