import getBasicUserData from "../../../util/getBasicUserData";
import getCountryFlag from "../../../util/getCountryFlag";
import { FunctionComponent } from "react";
import GitHubSquare from "./GitHubSquare";
import BypassErrorSerialization from "../../BypassErrorSerialization";

interface CountryFlagProps {
    username: string
}

async function CountryFlag({ username }: CountryFlagProps) {

    const result = await getBasicUserData(username);

    // @ts-ignore
    const Flag: FunctionComponent<{className: string}> | false = await getCountryFlag(result.data?.location);

    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            {
                (result.success) &&
                (Flag) ?
                <div
                className="rounded-sm md:rounded-[5px] w-full h-full overflow-hidden"
                >
                    <Flag
                    aria-label="The user's country flag."
                    className="w-full h-full"
                    />
                </div>
                :
                <GitHubSquare username={username} />
            }
        </>
    );
}

export default CountryFlag;