import getBasicUserData from "../../../util/getBasicUserData";
import BypassErrorSerialization from "../../BypassErrorSerialization";
import Experienced from "./Experienced";
import Famous from "./Famous";
import Veteran from "./Veteran";
    
interface AchievementsProps {
    username: string;
}
 
const Achievements = async ({ username }: AchievementsProps) => {
    const result = await getBasicUserData(username);

    // @ts-ignore
    const name: string = result.data?.name?.split(" ")?.[0] || username;

    return (
        <>
            <BypassErrorSerialization
            result={result}
            />

            {
                (result.success) &&
                <div
                className="flex justify-center gap-3"
                >
                    {
                        (result.data.achievements.famous) &&
                        <Famous
                        name={name}
                        />
                    }
                    {
                        (result.data.achievements.veteran) ?
                        <Veteran
                        name={name}
                        />
                        :
                        (result.data.achievements.experienced) &&
                        <Experienced
                        name={name}
                        />
                    }
                </div>
            }
        </>
    );
}
 
export default Achievements;