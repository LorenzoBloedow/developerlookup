import { FunctionComponent } from 'react';
import { DateSensitiveData } from "../../../../types";
import getEventDescription from "../../../../util/getEventDescription";

interface ActivityListProps {
    activity: DateSensitiveData["thirtyDays"]["mostActiveDay"];
}

const ActivityList: FunctionComponent<ActivityListProps> = ({ activity }) => {
    // From oldest
    const reverseActivity = activity.reverse();

    const scaledActivity = reverseActivity.map((action, i, arr): { type: string | null, date: string, hour: number } => {
        if (i === 0) {
            return { ...action, hour: 1 }
        }

        // Get the 24-hour scale relative to the hour of the first activity
        const dateDifference = new Date(action.date).getTime() - new Date(arr[0].date).getTime();
        const hour = Math.max(Math.trunc(dateDifference / (60 * 60 * 1000)), 1);

        return { ...action, hour }
    });

    const listItems = scaledActivity.map(action => {
        if (typeof action.type !== "string") return;

        return (
            <li
            key={`${action.type}-${action.date}`}
            style={{
                listStyleType: `"${action.hour}h"`
            }}
            className="text-xs w-40"
            >
                {getEventDescription(action.type)}
            </li>
        );
    });

    return (
        <ol
        className="flex flex-col items-center gap-2 max-h-72 overflow-y-auto"
        >
            {listItems}
        </ol>
    );
}
 
export default ActivityList;