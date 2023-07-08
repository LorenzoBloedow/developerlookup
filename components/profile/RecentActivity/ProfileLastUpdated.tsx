import { AiFillEdit } from "react-icons/ai";
import formatDate from "../../../util/formatDate";
import getBasicUserData from "../../../util/getBasicUserData";
import BypassErrorSerialization from "../../BypassErrorSerialization";

async function ProfileLastUpdated({ username }: { username: string }) {
    const result = await getBasicUserData(username);

    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            
            {
                (result.success) &&
                <div
                className="flex flex-col gap-2 text-sm w-28
                items-center justify-center text-slate-500"
                >
                    <AiFillEdit
                    className="w-12 h-12 text-slate-500"
                    />
                    <div>
                        <p>Profile last updated on: </p>
                        <p className="text-xs">{formatDate(result.data.profileLastUpdated, "short")}</p>
                    </div>
                </div>
            }
        </>
    );
}

export default ProfileLastUpdated;