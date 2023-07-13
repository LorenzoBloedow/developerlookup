import Link from "next/link";
import getBasicUserData from "../../../../util/getBasicUserData";
import TwitterButton from "./TwitterButton";
import BypassErrorSerialization from "../../../BypassErrorSerialization";

async function Twitter({ username }: { username: string }) {
    const result = await getBasicUserData(username);

    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            {
                (result.success && result.data?.twitter) &&
                <div
                className="flex flex-col text-xs items-center
                justify-center gap-1 md:text-lg w-full h-40 py-8
                border-slate-300 border-b-[1px]"
                >
                    <TwitterButton
                    handle={result.data.twitter}
                    />
                    <Link
                    className="text-blue-500"
                    href={"https://twitter.com/" + result.data.twitter}
                    >
                        @{result.data.twitter}
                    </Link>
                </div>
            }
        </>
    );
}

export default Twitter;