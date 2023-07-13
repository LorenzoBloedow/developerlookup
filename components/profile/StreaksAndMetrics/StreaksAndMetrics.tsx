import { Suspense } from "react";
import MostPopularRepo from "./MostPopularRepo/MostPopularRepo";
import MostUsedProgrammingLanguages from "./MostUsedProgrammingLanguages/MostUsedProgrammingLanguages";
import LongestCommitStreak from "./LongestStreak/LongestCommitStreak";
import LongestBreakStreak from "./LongestStreak/LongestBreakStreak";
import MostCommitsDay from "./MostCommitsDay/MostCommitsDay";
import MostActivity from "./MostActivity/MostActivity";
import CommitAmount from "./LongestStreak/Amount/CommitAmount";
import PullRequestAmount from "./LongestStreak/Amount/PullRequestAmount";
import LongestStreakLoading from "./LongestStreak/LongestStreakLoading";
import MostCommitsDayLoading from "./MostCommitsDay/MostCommitsDayLoading";
import MostActivityLoading from "./MostActivity/MostActivityLoading";
import AmountLoading from "./LongestStreak/Amount/AmountLoading";

interface StreaksAndMetrics {
    username: string
}

function StreaksAndMetrics({ username }: StreaksAndMetrics) {
    return (
        <div className="flex flex-col gap-8 md:gap-10">
            {/** @ts-expect-error */}
            <MostPopularRepo username={username} />

            <hr className="border-[1px] border-slate-300" />

            <MostUsedProgrammingLanguages username={username} />

            <div
            className="w-full h-48 md:h-56"
            >
                <Suspense fallback={<LongestStreakLoading />}>
                    {/* @ts-expect-error Server Component */}
                    <LongestCommitStreak username={username} />
                </Suspense>
            </div>
            <div
            className="w-full h-56 md:h-64"
            >
                <Suspense fallback={<LongestStreakLoading />}>
                    {/* @ts-expect-error Server Component */}
                    <LongestBreakStreak username={username} />
                </Suspense>
            </div>

            <div
            className="w-full h-52 md:h-64"
            >
                <Suspense fallback={<MostCommitsDayLoading />}>
                    {/* @ts-expect-error Server Component */}
                    <MostCommitsDay username={username} />
                </Suspense>
            </div>

            <div className="w-full h-96">
                <Suspense fallback={<MostActivityLoading />}>
                    {/* @ts-expect-error Server Component */}
                    <MostActivity username={username} />
                </Suspense>
            </div>

            <div
            className="w-full h-48"
            >
                <Suspense fallback={<AmountLoading />}>
                    {/* @ts-expect-error Server Component */}
                    <CommitAmount username={username} />
                </Suspense>
            </div>

            <div
            className="w-full h-52"
            >
                <Suspense fallback={<AmountLoading />}>
                    {/* @ts-expect-error Server Component */}
                    <PullRequestAmount username={username} />
                </Suspense>
            </div>
        </div>
    );
}

export default StreaksAndMetrics;