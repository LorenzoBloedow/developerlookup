import { MdOutlinePermContactCalendar } from "react-icons/md";
import getBasicUserData from "../../../../util/getBasicUserData";
import formatDate from "../../../../util/formatDate";
import BypassErrorSerialization from "../../../BypassErrorSerialization";

async function JoinDate({ username }: { username: string }) {
    const result = await getBasicUserData(username);

    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            {
                (result.success) &&
                <>
                    <MdOutlinePermContactCalendar
                    className="w-12 h-12 md:w-16 md:h-16 text-slate-500"
                    />
                    <p>
                        Joined on {formatDate(result.data.joinDate)}
                    </p>
                </>
            }
        </>
    );
}

export default JoinDate;