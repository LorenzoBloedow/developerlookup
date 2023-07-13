import { FunctionComponent, Suspense } from "react";
import Followers from "./Followers/Followers";
import JoinDate from "./JoinDate/JoinDate";
import Twitter from "./Twitter/Twitter";
import Gist from "./Gist/Gist";
import UserType from "./UserType/UserType";
import Subheading from "../Subheading";
import FollowersLoading from "./Followers/FollowersLoading";
import JoinDateLoading from "./JoinDate/JoinDateLoading";
import TwitterLoading from "./Twitter/TwitterLoading";
import GistLoading from "./Gist/GistLoading";
import UserTypeLoading from "./UserType/UserTypeLoading";

interface OverviewProps {
    username: string
}
 
const Overview: FunctionComponent<OverviewProps> = ({ username }) => {
    return (
        <div
        className="flex flex-col justify-center md:gap-2"
        >
            <Subheading>
                Overview
            </Subheading>
            
            <div className="flex w-full gap-4 justify-center md:justify-between">
                <div
                className="w-28 h-36 p-4 flex flex-col
                text-xs items-center text-center md:text-sm"
                >
                    <Suspense fallback={<FollowersLoading />}>
                        {/** @ts-expect-error */}
                        <Followers username={username} />
                    </Suspense>
                </div>

                <div
                className="w-28 h-36 p-4 flex flex-col text-xs items-center
                text-center leading-snug md:text-sm"
                >
                    <Suspense fallback={<JoinDateLoading />}>
                        {/** @ts-expect-error */}
                        <JoinDate username={username} />
                    </Suspense>
                </div>
            </div>
   
            <hr className="border-slate-300 border-b-[1px]" />

            <Suspense fallback={<TwitterLoading />}>
                {/** @ts-expect-error */}
                <Twitter username={username} />
            </Suspense>

            <div
            className="w-full h-40 py-8 flex flex-col
            text-xs items-center justify-center
            gap-1 text-slate-500 md:text-sm"
            >
                <Suspense fallback={<GistLoading />}>
                    {/** @ts-expect-error */}
                    <Gist username={username} />
                </Suspense>
            </div>

            <hr className="border-slate-300 border-b-[1px]" />

            <div
            className="w-full h-40 py-8 flex flex-col gap-2 items-center justify-center"
            >
                <Suspense fallback={<UserTypeLoading />}>
                    {/** @ts-expect-error */}
                    <UserType username={username} />
                </Suspense>
            </div>
        </div>
    );
}
 
export default Overview;