import { MdPeople } from "react-icons/md";
import getBasicUserData from "../../../../util/getBasicUserData";
import formatNumber from "../../../../util/formatNumber";
import BypassErrorSerialization from "../../../BypassErrorSerialization";

async function Followers({ username }: { username: string }) {
    const result = await getBasicUserData(username);
    
    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            {
                (result.success) &&
                <>
                    <MdPeople
                    className="w-12 h-12 md:w-16 md:h-16 text-slate-500"
                    />
                    <div>
                        <p>
                            Followers: 
                        </p>
                        <p>
                            {formatNumber.format(result.data.followers)}
                        </p>
                    </div>
                </>
            }
        </>
    );
}

export default Followers;