import { FunctionComponent, Suspense } from "react";
import Followers from "./Followers";
import JoinDate from "./JoinDate";
import Twitter from "./Twitter/Twitter";
import Gist from "./Gist";
import UserType from "./UserType";
import Subheading from "./Subheading";

interface OverviewProps {
    username: string
}
 
const Overview: FunctionComponent<OverviewProps> = ({ username }) => {
    return (
        <div
        className="flex flex-wrap justify-center md:gap-2"
        >
            <Subheading>
                Overview
            </Subheading>
            <div className="flex gap-4 md:gap-10">
                
                <Suspense>
                    {/** @ts-expect-error */}
                    <Followers username={username} />
                </Suspense>

                <Suspense>
                    {/** @ts-expect-error */}
                    <JoinDate username={username} />
                </Suspense>
            </div>
   
            <Suspense>
                {/** @ts-expect-error */}
                <Twitter username={username} />
            </Suspense>

            <Suspense>
                {/** @ts-expect-error */}
                <Gist username={username} />
            </Suspense>

            <Suspense>
                {/** @ts-expect-error */}
                <UserType username={username} />
            </Suspense>
        </div>
    );
}
 
export default Overview;