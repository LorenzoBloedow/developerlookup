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

export type DateSensitiveData = { pullRequestAmount: number;
    commitAmount: number;
    temp: {
        lastEventDate: Date | null;

        currentCommitStreak: TimeSpan;
        commitStreaks: TimeSpan[];

        currentBreakStreak: TimeSpan;
        breakStreaks: TimeSpan[];

        currentCommitAmount: CommitAmount;
        commitAmountByDay: CommitAmount[];

        currentActivity: EventSummary[];
        activityByDay: EventSummary[][];
    }
    programmingLanguageScore: LooseObject;
    longestCommitStreak: TimeSpan;
    longestBreakStreak: TimeSpan;
    mostCommitsDay: CommitAmount;
    mostActiveDay: EventSummary[];
    mostPopularRepoWorkedOn: Partial<PopularRepo>;
}

export type EventsData = {
    mostRecentRepos: RepositorySummary[] & { action: string }
    mostPopularRepo: PopularRepo & { userType: "member" | "owner" };
    lastActive: Date;
    lastCommit: RepoDateAndUrl & { name: string } | null | undefined;
    lastPullRequest: RepoDateAndUrl & { name: string } | null | undefined;
    ninetyDays: DateSensitiveData;
    thirtyDays: DateSensitiveData;
}

export type UserData = {
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
} & EventsData

export type TimeSpan = { startDate: number, endDate: number };

export type LooseObject = { [key: string]: any };