import { FunctionComponent, Suspense } from "react";
import LastActive from "./LastActive";
import LastCommit from "../LastCommit/LastCommit";
import LastPullRequest from "./LastPullRequest";
import LastReposWorkedOn from "../LastReposWorkedOn/LastReposWorkedOn";
import ProfileLastUpdated from "./ProfileLastUpdated";
import Subheading from "../Subheading";

interface RecentActivityProps {
    username: string;
}
 
const RecentActivity: FunctionComponent<RecentActivityProps> = ({ username }) => {
    return (
        <div
        className="flex flex-col gap-10"
        >
            <div
            className="flex flex-col gap-5"
            >
                <Subheading>
                    Last General Activity
                </Subheading>

                <div
                className="flex justify-center items-center gap-5"
                >
                    <Suspense>
                        {/** @ts-expect-error */}
                        <ProfileLastUpdated username={username} />
                    </Suspense>
                    <Suspense>
                        {/** @ts-expect-error */}
                        <LastActive username={username} />
                    </Suspense>
                </div>
            </div>

            <hr className="border-[1px] border-slate-300" />

            <Suspense>
                {/** @ts-expect-error */}
                <LastReposWorkedOn username={username} />
            </Suspense>

            <hr className="border-[1px] border-slate-300" />

            <Suspense>
                {/** @ts-expect-error */}
                <LastPullRequest username={username} />
            </Suspense>

            <hr className="border-[1px] border-slate-300" />

            <Suspense>
                {/** @ts-expect-error */}
                <LastCommit username={username} />
            </Suspense>

        </div>
    );
}
 
export default RecentActivity;