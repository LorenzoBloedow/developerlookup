import BypassErrorSerialization from "../../../BypassErrorSerialization";
import getDateSensitiveData from "../../../../util/getDateSensitiveData";
import { FaSplotch } from "react-icons/fa";
import getMostPopularRepo from "../../../../util/getMostPopularRepo";
import RepoLink from "../../LastCommit/RepoLink";
    
interface MostPopularRepoWorkedOnProps {
    username: string;
}
 
const MostPopularRepoWorkedOn = async ({ username }: MostPopularRepoWorkedOnProps) => {
    const result = await getDateSensitiveData(username);
    const mostPopularRepoResult = await getMostPopularRepo(username); 

    return (
        <>
            <BypassErrorSerialization
            result={result}
            />

            <BypassErrorSerialization
            result={mostPopularRepoResult}
            />

            {
                (
                    result.success &&
                    mostPopularRepoResult.success &&
                    mostPopularRepoResult.data.name !== result.data.thirtyDays.mostPopularRepoWorkedOn.name    
                ) &&
                <div
                className="flex flex-col items-center gap-1"
                >
                    <FaSplotch
                    className="w-12 h-12 md:w-16 md:h-16 text-[#e4bd11]"
                    />
    
                    <div
                    className="flex flex-col items-center"
                    >
                        <div
                        className="flex flex-col items-center"
                        >
                            <p>
                                {result.data.thirtyDays.mostPopularRepoWorkedOn.stars}
                            </p>
                            <p
                            className="text-xs md:text-sm"
                            >
                                stars
                            </p>
                        </div>

                        <RepoLink
                        repoName={result.data.thirtyDays.mostPopularRepoWorkedOn.name}
                        repoUrl={result.data.thirtyDays.mostPopularRepoWorkedOn.url}
                        />
                    </div>
                </div>
            }
        </>
    );
}
 
export default MostPopularRepoWorkedOn;