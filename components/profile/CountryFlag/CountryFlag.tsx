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
                <Flag
                aria-label="The user's country flag."
                className="w-20 h-10"
                />
                :
                <GitHubSquare username={username} />
            }
        </>
    );
}

export default CountryFlag;