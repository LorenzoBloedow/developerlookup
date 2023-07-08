import getBasicUserData from "../../../util/getBasicUserData";
import BypassErrorSerialization from "../../BypassErrorSerialization";
import NameClient from "./NameClient";

interface NameProps {
    username: string
}

const Name = async ({ username }: NameProps) => {
    const result = await getBasicUserData(username);

    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            {
                (result.success) &&
                <NameClient name={result.data?.name || "No Name"} />
            }
        </>
    );
}
 
export default Name;