import Tooltip from "../../Tooltip";
import { FaPeopleGroup } from "react-icons/fa6";

function Famous({ name }: { name: string }) {
    return (
        <Tooltip
        tip={name + " has over 1000 followers!"}
        >
            <FaPeopleGroup
            className="rounded-full bg-slate-400 text-slate-700 p-1 w-5 h-5 md:w-10 md:h-10 md:p-2.5"
            />
        </Tooltip>
    );
}

export default Famous;