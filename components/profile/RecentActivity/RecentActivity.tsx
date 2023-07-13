import { FunctionComponent, Suspense } from "react";
import LastActive from "./LastActive/LastActive";
import LastCommit from "./LastCommit/LastCommit";
import LastPullRequest from "./LastPullRequest/LastPullRequest";
import LastReposWorkedOn from "./LastReposWorkedOn/LastReposWorkedOn";
import ProfileLastUpdated from "./ProfileLastUpdated/ProfileLastUpdated";
import Subheading from "../Subheading";
import ProfileLastUpdatedLoading from "./ProfileLastUpdated/ProfileLastUpdatedLoading";
import LastActiveLoading from "./LastActive/LastActiveLoading";
import LastReposWorkedOnLoading from "./LastReposWorkedOn/LastReposWorkedOnLoading";
import LastPullRequestLoading from "./LastPullRequest/LastPullRequestLoading";
import LastCommitLoading from "./LastCommit/LastCommitLoading";

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
                    <div
                    className="flex flex-col gap-2 text-sm md:text-base w-28 h-36
                    items-center justify-center text-slate-500 "
                    >
                        <Suspense fallback={<ProfileLastUpdatedLoading />}>
                            {/** @ts-expect-error */}
                            <ProfileLastUpdated username={username} />
                        </Suspense>
                    </div>

                    <div
                    className="flex flex-col gap-2 text-sm items-center
                    justify-center text-slate-500 w-28 md:text-base
                    md:leading-tight"
                    >
                        <Suspense fallback={<LastActiveLoading />}>
                            {/** @ts-expect-error */}
                            <LastActive username={username} />
                        </Suspense>
                    </div>
                </div>
            </div>

            <hr className="border-[1px] border-slate-300" />

            <div className="flex flex-col items-center gap-5">
                    <Subheading>
                        Most Recent Repository Activity
                    </Subheading>

                <div
                className="flex flex-col items-center gap-5
                max-h-72 overflow-x-hidden overflow-y-auto"
                >
                    <Suspense fallback={<LastReposWorkedOnLoading />}>
                        {/** @ts-expect-error */}
                        <LastReposWorkedOn username={username} />
                    </Suspense>
                </div>
            </div>

            <hr className="border-[1px] border-slate-300" />

            <div
            className="flex flex-col gap-1 items-center justify-center leading-snug"
            >
                <Suspense fallback={<LastPullRequestLoading />}>
                    {/** @ts-expect-error */}
                    <LastPullRequest username={username} />
                </Suspense>
            </div>

            <hr className="border-[1px] border-slate-300" />

            <div
            className="flex flex-col gap-1 items-center justify-center leading-snug"
            >
                <Suspense fallback={<LastCommitLoading />}>
                    {/** @ts-expect-error */}
                    <LastCommit username={username} />
                </Suspense>
            </div>
        </div>
    );
}
 
export default RecentActivity;