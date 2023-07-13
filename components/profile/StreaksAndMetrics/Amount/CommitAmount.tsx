import { IoMdGitCommit } from "react-icons/io";
import getDateSensitiveData from "../../../../util/getDateSensitiveData";
import BypassErrorSerialization from "../../../BypassErrorSerialization";
import Amount from "./Amount";

interface CommitAmountProps {
    username: string;
}

async function CommitAmount({ username }: CommitAmountProps) {
    const result = await getDateSensitiveData(username);

    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            {
                (result.success) &&
                <Amount
                amount={result.data.thirtyDays.commitAmount}
                title="Number Of Commits In The Last 30 Days"
                subtitle="Commits"
                icon={<IoMdGitCommit className="w-12 h-12 md:w-16 md:h-16 -my-2 text-slate-700" />}
                />
            }
        </>
    );
}

export default CommitAmount;