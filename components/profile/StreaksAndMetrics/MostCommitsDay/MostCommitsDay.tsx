import { GoTrophy } from "react-icons/go";
import getDateSensitiveData from "../../../../util/getDateSensitiveData";
import BypassErrorSerialization from "../../../BypassErrorSerialization";
import Subheading from "../../Subheading";
    
interface MostCommitsDayProps {
    username: string
}
 
const MostCommitsDay = async ({ username }: MostCommitsDayProps) => {
    const result = await getDateSensitiveData(username);

    return (
        <>
            <BypassErrorSerialization
            result={result}
            />

            {
                (result.success && result.data.thirtyDays.mostCommitsDay.date) &&
                <div
                className="flex flex-col gap-3 items-center"
                >
                    <Subheading>
                        Most Commits In a Day
                    </Subheading>
                    <GoTrophy
                    className="w-12 h-12 md:w-16 md:h-16 text-slate-700"
                    />

                    <div
                    className="flex flex-col gap-1 items-center"
                    >
                        <div>
                            <p
                            className="text-xl md:text-2xl"
                            >
                                {result.data.thirtyDays.mostCommitsDay.amount}
                            </p>
                            <p
                            className="text-sm md:text-base"
                            >
                            commit{result.data.thirtyDays.mostCommitsDay.amount > 1 ? "s" : ""}
                            </p>
                        </div>
                        <p
                        className="text-xs md:text-sm"
                        >
                            {new Date(result.data.thirtyDays.mostCommitsDay.date).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            }
        </>
    );
}
 
export default MostCommitsDay;