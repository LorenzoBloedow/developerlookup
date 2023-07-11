import { MdPeople } from "react-icons/md";
import getBasicUserData from "../../util/getBasicUserData";
import formatNumber from "../../util/formatNumber";
import BypassErrorSerialization from "../BypassErrorSerialization";

async function Followers({ username }: { username: string }) {
    const result = await getBasicUserData(username);
    
    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            {
                (result.success) &&
                <div
                className="flex flex-col text-xs items-center
                border-slate-300 border-b-2 p-4 text-center w-28"
                >
                    <MdPeople
                    className="w-12 h-12 text-slate-500"
                    />
                    <div>
                        <p>
                            Followers: 
                        </p>
                        <p>
                            {formatNumber.format(result.data.followers)}
                        </p>
                    </div>
                </div>
            }
        </>
    );
}

export default Followers;