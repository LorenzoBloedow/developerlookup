import { Suspense } from "react";
import MostPopularRepo from "./MostPopularRepo/MostPopularRepo";
import MostUsedProgrammingLanguages from "./MostUsedProgrammingLanguages/MostUsedProgrammingLanguages";
import LongestCommitStreak from "./LongestStreak/LongestCommitStreak";
import LongestBreakStreak from "./LongestStreak/LongestBreakStreak";
import MostCommitsDay from "./MostCommitsDay/MostCommitsDay";
import MostActivity from "./MostActivity/MostActivity";
import CommitAmount from "./LongestStreak/Amount/CommitAmount";
import PullRequestAmount from "./LongestStreak/Amount/PullRequestAmount";

interface StreaksAndMetrics {
    username: string
}

function StreaksAndMetrics({ username }: StreaksAndMetrics) {
    return (
        <div className="flex flex-col gap-8 md:gap-10">
            <Suspense>
                {/** @ts-expect-error */}
                <MostPopularRepo username={username} />
            </Suspense>

            <hr className="border-2 border-slate-300" />

            <Suspense>
                <MostUsedProgrammingLanguages username={username} />
            </Suspense>

            <Suspense>
                {/* @ts-expect-error Server Component */}
                <LongestCommitStreak username={username} />
            </Suspense>

            <Suspense>
                {/* @ts-expect-error Server Component */}
                <LongestBreakStreak username={username} />
            </Suspense>

            <Suspense>
                {/* @ts-expect-error Server Component */}
                <MostCommitsDay username={username} />
            </Suspense>

            <Suspense>
                {/* @ts-expect-error Server Component */}
                <MostActivity username={username} />
            </Suspense>

            <Suspense>
                {/* @ts-expect-error Server Component */}
                <CommitAmount username={username} />
            </Suspense>

            <Suspense>
                {/* @ts-expect-error Server Component */}
                <PullRequestAmount username={username} />
            </Suspense>
        </div>
    );
}

export default StreaksAndMetrics;