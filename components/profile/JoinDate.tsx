import { MdOutlinePermContactCalendar } from "react-icons/md";
import getBasicUserData from "../../util/getBasicUserData";
import formatDate from "../../util/formatDate";
import BypassErrorSerialization from "../BypassErrorSerialization";

async function JoinDate({ username }: { username: string }) {
    const result = await getBasicUserData(username);

    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            {
                (result.success) &&
                <div
                className="flex flex-col text-xs items-center border-slate-300
                border-b-2 p-4 text-center w-28 leading-snug"
                >
                    <MdOutlinePermContactCalendar
                    className="w-12 h-12 text-slate-500"
                    />
                    <p>
                        Joined on {formatDate(result.data.joinDate)}
                    </p>
                </div>
            }
        </>
    );
}

export default JoinDate;