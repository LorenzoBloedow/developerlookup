import { FunctionComponent, Suspense } from "react";
import Followers from "./Followers";
import JoinDate from "./JoinDate";
import TwitterOrGists from "./TwitterOrGists";
import UserType from "./UserType";

interface OverviewProps {
    username: string
}
 
const Overview: FunctionComponent<OverviewProps> = ({ username }) => {
    return (
        <div
        className="flex flex-wrap justify-center gap-5"
        >
            <h1 className="text-6xl font-bold">Basic information</h1>
            <div className="flex gap-4">
                
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
                <TwitterOrGists username={username} />
            </Suspense>

            <Suspense>
                {/** @ts-expect-error */}
                <UserType username={username} />
            </Suspense>
        </div>
    );
}
 
export default Overview;