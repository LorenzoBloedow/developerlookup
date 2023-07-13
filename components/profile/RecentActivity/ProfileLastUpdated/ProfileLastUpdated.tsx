import { AiFillEdit } from "react-icons/ai";
import formatDate from "../../../../util/formatDate";
import getBasicUserData from "../../../../util/getBasicUserData";
import BypassErrorSerialization from "../../../BypassErrorSerialization";

async function ProfileLastUpdated({ username }: { username: string }) {
    const result = await getBasicUserData(username);

    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            
            {
                (result.success) &&
                <>
                    <AiFillEdit
                    className="w-12 h-12 md:w-16 md:h-16 text-slate-500"
                    />
                    <div>
                        <p>Profile last updated on: </p>
                        <p className="text-xs md:text-sm">{formatDate(result.data.profileLastUpdated, "short")}</p>
                    </div>
                </>
            }
        </>
    );
}

export default ProfileLastUpdated;