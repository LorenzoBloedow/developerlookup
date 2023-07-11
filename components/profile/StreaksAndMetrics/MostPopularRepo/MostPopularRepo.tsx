import { GiStarsStack } from "react-icons/gi";;
import { Suspense } from "react";
import RepoData from "./RepoData/RepoData";
import RepoDataLoading from "./RepoData/RepoDataLoading";
import Subheading from "../../Subheading";

interface MostPopularRepoProps {
    username: string
}

async function MostPopularRepo({ username }: MostPopularRepoProps) {
 
    return (
        <div
        className="flex flex-col items-center gap-3"
        >
            <Subheading>
                Most Popular Repository
            </Subheading>
            <GiStarsStack
            className="w-12 h-12 text-[#e4bd11]"
            />
            
            <div
            className="w-60"
            >
                <Suspense
                fallback={<RepoDataLoading />}
                >
                    {/* @ts-expect-error Server Component */}
                    <RepoData
                    username={username}
                    />
                </Suspense>
            </div>
        </div>
    );
}

export default MostPopularRepo;