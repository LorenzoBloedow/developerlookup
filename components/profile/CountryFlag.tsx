import fetchBasicUserData from "../../util/getBasicUserData";
import getCountryFlag from "../../util/getCountryFlag";
import { BsGithub } from "react-icons/bs"

interface CountryFlagProps {
    username: string
}

async function CountryFlag({ username }: CountryFlagProps) {

    const { location } = await fetchBasicUserData(username);

    const Flag = await getCountryFlag(location);

    return (
        <div>
            {
                Flag ?
                <div
                aria-label="The user's country flag."
                className="ml-auto w-[17%] border-4 border-white shadow-black shadow-md"
                >
                    <Flag />
                </div>
                :
                <BsGithub
                size={100}
                aria-label="The GitHub logo."
                className="absolute top-7 right-7"
                />
            }
        </div>
    );
}

export default CountryFlag;