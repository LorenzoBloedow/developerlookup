import BypassErrorSerialization from "../../../BypassErrorSerialization";
import getDateSensitiveData from "../../../../util/getDateSensitiveData";
import { BiRun } from "react-icons/bi";
import LongestStreak from "./LongestStreak";
    
interface LongestCommitStreakProps {
    username: string;
}
 
const LongestCommitStreak = async ({ username }: LongestCommitStreakProps) => {
    const result = await getDateSensitiveData(username);
    
    return (
        <>
            <BypassErrorSerialization
            result={result}
            />

            {
                (result.success) &&
                // @ts-expect-error Server Component
                <LongestStreak
                title="Longest Commit Streak"
                startDate={result.data.thirtyDays.longestCommitStreak.startDate}
                endDate={result.data.thirtyDays.longestCommitStreak.endDate}
                icon={
                    <BiRun
                    className="w-12 h-12 md:w-16 md:h-16 text-slate-700"
                    />
                }
                />
            }
        </>
    );
}
 
export default LongestCommitStreak;