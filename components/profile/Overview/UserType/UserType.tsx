import { FaUserAlt } from "react-icons/fa";
import getBasicUserData from "../../../../util/getBasicUserData";
import BypassErrorSerialization from "../../../BypassErrorSerialization";

async function UserType({ username }: { username: string }) {
    const result = await getBasicUserData(username)

    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            {
                (result.success) &&
                <>
                    <FaUserAlt
                    className={`w-12 h-12 md:w-16 md:h-16 ${ result.data.admin ? "text-red-500" : "text-slate-500" }`}
                    />
                    <div>
                        <p
                        className="text-sm md:text-base"
                        >
                            User type:
                        </p>
                        <p
                        className="text-xs md:text-sm"
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
                </>
            }
        </>
        
    );
}

export default UserType;