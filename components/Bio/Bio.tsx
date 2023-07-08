import getBasicUserData from "../../util/getBasicUserData";
import BypassErrorSerialization from "../BypassErrorSerialization";

interface BioProps {
    username: string
}


const Bio = async ({ username }: BioProps) => {
    const result = await getBasicUserData(username);

    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            {
                (result.success) &&
                <p
                className="text-sm text-slate-500 line-clamp-2 w-full h-full"
                >
                    {result.data.bio ? result.data.bio : "I have no words..."}
                </p>
            }
        </>

    );
}
 
export default Bio;