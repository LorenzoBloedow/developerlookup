import BypassErrorSerialization from "../../../BypassErrorSerialization";
import getDateSensitiveData from "../../../../util/getDateSensitiveData";
import LongestStreak from "./LongestStreak";
import { FaUmbrellaBeach } from "react-icons/fa";
    
interface LongestBreakStreakProps {
    username: string;
}
 
const LongestBreakStreak = async ({ username }: LongestBreakStreakProps) => {
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
                title="Longest Time Without Any Commits"
                startDate={result.data.thirtyDays.longestBreakStreak.startDate}
                endDate={result.data.thirtyDays.longestBreakStreak.endDate}
                icon={
                    <FaUmbrellaBeach
                    className="w-12 h-12 text-slate-700"
                    />
                }
                />
            }
        </>
    );
}
 
export default LongestBreakStreak;