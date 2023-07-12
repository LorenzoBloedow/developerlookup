import { MdOutlineElderly } from "react-icons/md";
import Tooltip from "../../Tooltip";

function Veteran({ name }: { name: string }) {
    return (
        <Tooltip
        tip={name + " has been on GitHub for over 5 years!"}
        >
            <MdOutlineElderly
            className="rounded-full bg-slate-400 text-slate-700 p-1 w-5 h-5 md:w-10 md:h-10 md:p-2.5"
            />
        </Tooltip>
    );
}

export default Veteran;