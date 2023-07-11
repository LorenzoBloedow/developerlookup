import getMostPopularRepo from "../../../../../util/getMostPopularRepo";
import { BiGitRepoForked } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { IoMdEye } from "react-icons/io";
import RepoLink from "../../../LastCommit/RepoLink";
import ItemCategory from "../ItemCategory";
import ListItem from "../ListItem";
import Line from "../Line";
import ItemNumber from "../ItemNumber";
import BypassErrorSerialization from "../../../../BypassErrorSerialization";

interface RepoDataProps {
    username: string;
}

async function RepoData({ username }: RepoDataProps) {
    const result = await getMostPopularRepo(username);
    
    return (
        <>
            <BypassErrorSerialization
            result={result}
            />
            {
                (result.success) &&
                <ul
                className="flex flex-col items-center gap-2 w-full"
                >
                    <RepoLink
                    repoName={result.data.name}
                    repoUrl={result.data.url}
                    />

                    <ListItem>
                        <ItemCategory>
                            <AiFillStar className="w-4 h-4" />
                            <p>Stars</p>
                        </ItemCategory>

                        <Line />

                        <ItemNumber>
                            {result.data.stars}
                        </ItemNumber>
                    </ListItem>

                    <ListItem>
                        <ItemCategory>
                            <BiGitRepoForked className="w-4 h-4" />
                            <p>Forks</p>
                        </ItemCategory>

                        <Line />

                        <ItemNumber>
                            {result.data.forks}
                        </ItemNumber>
                    </ListItem>

                    <ListItem>
                        <ItemCategory>
                            <IoMdEye className="w-4 h-4" />
                            <p>Watching</p>
                        </ItemCategory>

                        <Line />

                        <ItemNumber>
                            {result.data.watchers}
                        </ItemNumber>
                    </ListItem>
                </ul>
            }
        </>
    );
}

export default RepoData;