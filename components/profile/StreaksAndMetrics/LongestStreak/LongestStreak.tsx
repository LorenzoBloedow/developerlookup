import { ReactNode } from "react";
import Subheading from "../../Subheading";
import { RiQuestionFill } from "react-icons/ri";
import Tooltip from "../../../Tooltip";

interface LongestStreakProps {
    startDate: number;
    endDate: number;
    title: string;
    icon: ReactNode;
}
 
const LongestStreak = async ({ startDate, endDate, title, icon }: LongestStreakProps) => {
    const streakDays = parseInt(((endDate - startDate) / (60 * 60 * 24 * 1000)).toFixed(0));

    return (
        <div
        className="flex flex-col items-center gap-4 md:text-lg"
        >
            <Subheading>
                <span
                className="relative"
                >
                    {title}
                    <span className="hidden md:inline-block absolute ml-1">
                        <Tooltip
                        tip="Calculated by checking the calendar days of every git push"
                        >
                            <RiQuestionFill
                            className="w-5 h-5 text-slate-700"
                            />
                        </Tooltip>
                    </span>
                </span>
            </Subheading>




            <div
            className="flex flex-col items-center gap-2"
            >
                {icon}

                <p>
                    {streakDays} Day{streakDays > 1 ? "s" : ""}
                </p>
                <p
                className="text-xs md:text-sm"
                >
                    {new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}
 
export default LongestStreak;