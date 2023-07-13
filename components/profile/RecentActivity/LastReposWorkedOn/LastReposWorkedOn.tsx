import getRecentData from "../../../../util/getRecentData";
import BypassErrorSerialization from "../../../BypassErrorSerialization";
import Subheading from "../../Subheading";
import FormattedDate from "./FormattedDate";
import Repo from "./Repo";
import { GiWindHole } from "react-icons/gi";

async function LastReposWorkedOn({ username }: { username: string }) {
    const result = await getRecentData(username);
    
    // @ts-ignore
    const recentRepos = result.data?.mostRecentRepos?.map?.((repo: { name: string; url: string; action: string; date: string; }) => {
        const date = new Date(repo.date);
        return (
            <Repo
            repoName={repo.name}
            repoUrl={repo.url}
            repoAction={repo.action}
            date={<FormattedDate date={repo.date} />}
            key={date.getTime()}
            />
        );
    });
    
    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            {
                (result.success) &&
                <div className="flex flex-col items-center gap-5">
                    <Subheading>
                        Most Recent Repository Activity
                    </Subheading>
                    <div className="flex flex-col items-center gap-5">
                        {
                        recentRepos.length > 0 ?
                        recentRepos
                        :
                            <div className="flex flex-col items-center justify-center">
                                <GiWindHole className="w-12 h-12 md:w-16 md:h-16 text-[#221335]" />
                                <p
                                className="text-sm md:text-base"
                                >
                                    We looked everywhere but couldn't find anything!
                                </p>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    );
}

export default LastReposWorkedOn;