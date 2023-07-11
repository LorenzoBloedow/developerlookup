import { FaUserAlt } from "react-icons/fa";
import getBasicUserData from "../../util/getBasicUserData";
import BypassErrorSerialization from "../BypassErrorSerialization";

async function UserType({ username }: { username: string }) {
    const result = await getBasicUserData(username)

    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            {
                (result.success) &&
                <div className="flex flex-col gap-2 items-center justify-center py-8">
                    <FaUserAlt
                    className={`w-12 h-12 ${ result.data.admin ? "text-red-500" : "text-slate-500" }`}
                    />
                    <div>
                        <p
                        className="text-sm"
                        >
                            User type:
                        </p>
                        <p
                        className="text-xs"
                        >
                            {
                                result.data.admin ?
                                <span
                                className="text-red-500"
                                >
                                    Admin
                                </span>
                                :
                                <span
                                className="text-slate-500"
                                >
                                    Regular User
                                </span>
                            }
                        </p>
                    </div>
                </div>
            }
        </>
        
    );
}

export default UserType;