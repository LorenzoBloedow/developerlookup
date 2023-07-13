import { GiWantedReward } from "react-icons/gi";
import formatDate from "../../../../util/formatDate";
import getRecentData from "../../../../util/getRecentData";
import BypassErrorSerialization from "../../../BypassErrorSerialization";

async function LastActive({ username }: { username: string }) {
    const result = await getRecentData(username);

    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            {
                (result.success) &&
                <>
                    <GiWantedReward
                    className="w-12 h-12 md:w-16 md:h-16 text-slate-500"
                    />
                    <div>
                        <p>Last active<br /> on: </p>
                        <p
                        className="text-xs md:text-sm"
                        >
                            {
                                result.data.lastActive ?
                                formatDate(result.data.lastActive.date)
                                :
                                username + " hasn't been active in the last 90 days!"
                            }
                        </p>
                    </div>
                </>
            }
        </>
    );
}

export default LastActive;