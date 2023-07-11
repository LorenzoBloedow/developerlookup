import { ReactNode } from "react";
import Subheading from "../../Subheading";

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
        className="flex flex-col items-center gap-4"
        >
            <Subheading>
                {title}
            </Subheading>

            <div
            className="flex flex-col items-center gap-2"
            >
                {icon}

                <p>
                    {streakDays} Days
                </p>
                <p
                className="text-xs"
                >
                    {new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}
 
export default LongestStreak;