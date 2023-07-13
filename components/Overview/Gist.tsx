import { TiCodeOutline } from "react-icons/ti";
import getBasicUserData from "../../util/getBasicUserData";
import BypassErrorSerialization from "../BypassErrorSerialization";

async function Gist({ username }: { username: string }) {
    const result = await getBasicUserData(username);
    
    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            {
                (result.success) &&
                <div
                className="flex flex-col text-xs items-center justify-center
                w-full gap-1 border-slate-300 border-b-2 py-8 text-slate-500
                md:text-sm"
                >
                    <TiCodeOutline
                    className="w-12 h-12 md:w-16 md:h-16"
                    />
                    <p>
                        Number of gists:
                    </p>
                    <p>
                        {result.data.gistAmount}
                    </p>
                </div>
            }
        </>
    );
}

export default Gist;

