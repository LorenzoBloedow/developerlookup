import Tooltip from "../../Tooltip";
import { IoCalendar } from "react-icons/io5";

function Experienced({ name }: { name: string }) {
    return (
        <Tooltip
        tip={name + " has been on GitHub for over 1 year!"}
        >
            <IoCalendar
            className="rounded-full bg-slate-400 text-slate-700 p-1 w-5 h-5"
            />
        </Tooltip>
    );
}

export default Experienced;