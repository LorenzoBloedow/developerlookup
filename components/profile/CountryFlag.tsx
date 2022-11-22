import getBasicUserData from "../../util/getBasicUserData";
import getCountryFlag from "../../util/getCountryFlag";
import { FunctionComponent } from "react";
import GitHubSquare from "./GitHubSquare";

interface CountryFlagProps {
    username: string
}

async function CountryFlag({ username }: CountryFlagProps) {

    const { location } = await getBasicUserData(username);

    const Flag: FunctionComponent<{className: string}> | false = await getCountryFlag(location);

    return (
        <>
            {
                Flag ?
                <div
                aria-label="The user's country flag."
                className="ml-auto w-[20%] border-4 border-white shadow-black shadow-md "
                >
                    <Flag className="w-full h-full" />
                </div>
                :
                <GitHubSquare username={username} />
            }
        </>
    );
}

export default CountryFlag;