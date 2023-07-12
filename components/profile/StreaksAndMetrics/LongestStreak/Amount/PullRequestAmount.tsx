import getDateSensitiveData from "../../../../../util/getDateSensitiveData";
import BypassErrorSerialization from "../../../../BypassErrorSerialization";
import Amount from "./Amount";
import { VscGitPullRequest } from "react-icons/vsc";

interface PullRequestAmountProps {
    username: string;
}

async function PullRequestAmount({ username }: PullRequestAmountProps) {
    const result = await getDateSensitiveData(username);

    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            {
                (result.success) &&
                <Amount
                amount={result.data.thirtyDays.pullRequestAmount}
                title="Number Of PRs In The Last 30 Days"
                subtitle="Pull Requests"
                icon={<VscGitPullRequest className="w-12 h-12 md:w-16 md:h-16 text-slate-700" />}
                />
            }
        </>
    );
}

export default PullRequestAmount;