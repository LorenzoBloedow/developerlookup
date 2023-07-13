import { TiCodeOutline } from "react-icons/ti";
import getBasicUserData from "../../../../util/getBasicUserData";
import BypassErrorSerialization from "../../../BypassErrorSerialization";

async function Gist({ username }: { username: string }) {
    const result = await getBasicUserData(username);
    
    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            {
                (result.success) &&
                <>
                    <TiCodeOutline
                    className="w-12 h-12 md:w-16 md:h-16"
                    />
                    <p>
                        Number of gists:
                    </p>
                    <p>
                        {result.data.gistAmount}
                    </p>
                </>
            }
        </>
    );
}

export default Gist;

