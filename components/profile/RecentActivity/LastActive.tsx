import { GiWantedReward } from "react-icons/gi";
import formatDate from "../../../util/formatDate";
import getRecentData from "../../../util/getRecentData";
import BypassErrorSerialization from "../../BypassErrorSerialization";

async function LastActive({ username }: { username: string }) {
    const result = await getRecentData(username);

    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            {
                (result.success) &&
                <div
                className="flex flex-col gap-2 text-sm items-center
                justify-center text-slate-500 mb-auto w-28"
                >
                    <GiWantedReward
                    className="w-12 h-12 text-slate-500"
                    />
                    <div>
                        <p>Last active<br /> on: </p>
                        <p
                        className="text-xs"
                        >
                            {
                                result.data.lastActive ?
                                formatDate(result.data.lastActive.date)
                                :
                                username + " hasn't been active in the last 90 days!"
                            }
                        </p>
                    </div>
                </div>
            }
        </>
    );
}

export default LastActive;