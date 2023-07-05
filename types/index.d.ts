import { RestEndpointMethodTypes } from "@octokit/rest";
import { RequestParameters } from "@octokit/types";

export type PopularRepo = RepositorySummary & { stars: number, forks: number, watchers: number }

export type RepositorySummary = {
    url: string;
    name: string;
}

export type PaginationEvent = {
    id: string;
    type: string | null;
    actor: {
        id: number;
        login: string;
        display_login?: string | undefined;
        gravatar_id: string | null;
        url: string;
        avatar_url: string;
    };
    repo: {
        id: number;
        name: string;
        url: string;
    };
    org?: {
        id: number;
        login: string;
        display_login?: string | undefined;
        gravatar_id: string | null;
        url: string;
        avatar_url: string;
    } | undefined;
    payload: any;
    public: boolean;
    created_at: string | null;
}

export type EventSummary = {
    type: string | null;
    date: string;
}

export type TimeInterval = {
    startDate: number;
    endDate: number;
}

export type RepoDateAndUrl = {
    date: Date;
    repoUrl: string;
}

export type CommitAmount = { amount: number, date?: Date }

type DateSensitiveDataTimespanData = {
    pullRequestAmount: number;
    commitAmount: number;
    programmingLanguageScore: {
        name: string;
        color: string;
        score: number;
    }[];
    longestCommitStreak: TimeSpan;
    longestBreakStreak: TimeSpan;
    mostCommitsDay: CommitAmount;
    mostActiveDay: EventSummary[];
    mostPopularRepoWorkedOn: Partial<PopularRepo>;
}

export type DateSensitiveData = {
    thirtyDays: DateSensitiveDataTimespanData;
    ninetyDays: DateSensitiveDataTimespanData;
}

export type MostPopularRepo = PopularRepo & { userType: "member" | "owner" };

export type EventsData = {

    mostPopularRepo: MostPopularRepo;

    ninetyDays: DateSensitiveData;
    thirtyDays: DateSensitiveData;
}

type RecentRepo = {
    date: Date;
    url: string;
    name: string;
}

export type MostRecentData = {
    lastActive: {
        action: string;
        date: Date;
    }
    lastCommit?: RecentRepo;
    lastPullRequest?: RecentRepo;
    mostRecentRepos: (RepositorySummary  & { action: string })[];
}

export type BasicUserData = {
    name: string | null,
    profilePic: string,
    bio: string | null,
    admin: boolean,
    location: string | null,
    followers: number,
    joinDate: Date,
    gistAmount: number,
    twitter: string | null | undefined,
    hireable: boolean | null
    achievements: {
        experienced: boolean,
        famous: boolean,
        veteran: boolean
    },
    profileLastUpdated: string
}

export type UserData = BasicUserData & EventsData;

export type TimeSpan = { startDate: number, endDate: number };

export type LooseObject = { [key: string]: any };

export type ApiErrorCode = "rateLimited" | "invalidUsername" | "failedAuthentication" | "unknown";

export type ApiError<Code extends (ApiErrorCode | unknown)> = {
    success: false,
    // If the code is known at compile time, it must have extra, otherwise it might have
    data: Code extends "rateLimited" ? {
        message: string,
        code: Code,
        extra:  {
            isLoggedIn: boolean
        }
    } : {
        message: string,
        code: Code,
        extra?: {
            isLoggedIn: boolean
        }
    }
}

export type ApiRequest<Data extends LooseObject, ErrorCode extends (ApiErrorCode | unknown)> = Data extends undefined ? ({
    success: true,
} | ApiError<ErrorCode>) : ({
    success: true,
    data: Data
} | ApiError<ErrorCode>);

export type GenericOctokitFunction = (params: RequestParameters & LooseObject) => Promise<void>;

export type ApiEndpoint = `/${"authenticateUser" | "getBasicUserData" |
"getDateSensitiveData" | "getMostPopularRepo" |
"getProfileComments" | "getRecentData" |
"getSurroundingData" |  "revalidate"}`;