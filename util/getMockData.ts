import { ApiEndpoint, ApiRequest, BasicUserData, DateSensitiveData, MostPopularRepo, MostRecentData } from "../types";

type Data<ApiEndpoint> =
    ApiEndpoint extends "/getBasicUserData" ?
    BasicUserData
    :
    ApiEndpoint extends "/getDateSensitiveData" ?
    DateSensitiveData
    :
    ApiEndpoint extends "/getRecentData" ?
    MostRecentData
    :
    ApiEndpoint extends "/getMostPopularRepo" ?
    MostPopularRepo
    :
    never;

async function getMockData<T extends ApiEndpoint>(endpoint: T): Promise<ApiRequest<Data<T>, unknown>> {
    const basicUserData = {
        "success": true,
        "data": {
            "name": "Linus Torvalds",
            "profilePic": "https://avatars.githubusercontent.com/u/1024025?v=4",
            "bio":null,
            "admin":false,
            "location": "Portland, OR",
            "followers": 186508,
            "joinDate": "2011-09-03T15:26:22.000Z",
            "gistAmount": 0,
            "twitter": null,
            "hireable": null,
            "achievements": {
                "famous": true,
                "experienced": true,
                "veteran": true
            },
            "profileLastUpdated": "2023-07-08T17:00:58Z"
        }
    }

    const dateSensitiveData = {
        "success": true,
        "data": {
            "thirtyDays": {
                "COMMIT_DETAILS_LIMIT": 100,
                "pullRequestAmount": 2,
                "commitAmount": 1559,
                "programmingLanguageScore": {
                    "languages": [
                        {
                            "name": "C",
                            "score": 69.02158273381295,
                            "color": "#555555"
                        },
                        {
                            "name": "Objective-C",
                            "score": 28.74820143884892,
                            "color": "#438eff"
                        },
                        {
                            "name": "Makefile",
                            "score": 2.028776978417266,
                            "color": "#427819"
                        },
                        {
                            "name": "Raku",
                            "score": 0.10071942446043165,
                            "color": "#0000fb"
                        },
                        {
                            "name": "Shell",
                            "score": 0.08633093525179857,
                            "color": "#89e051"
                        },
                        {
                            "name": "Python",
                            "score": 0.014388489208633093,
                            "color": "#3572A5"
                        },
                        {
                            "name": "Awk",
                            "score": 0,
                            "color": "#c30e9b"
                        }
                    ],
                    "dataUsed": 6.414368184733804
                },
                "longestCommitStreak": {
                    "startDate": 1687713764000,
                    "endDate": 1689009588000
                },
                "longestBreakStreak": {
                    "startDate": 1686701403000,
                    "endDate": 1686870569000
                },
                "mostCommitsDay": {
                    "amount": 186,
                    "date": "2023-06-27T18:01:00.000Z"
                },
                "mostActiveDay": [
                    {
                        "type": "PushEvent",
                        "date": "2023-06-30T06:43:35Z"
                    },
                    {
                        "type": "PushEvent",
                        "date": "2023-06-30T06:23:17Z"
                    },
                    {
                        "type": "PushEvent",
                        "date": "2023-06-30T06:14:03Z"
                    },
                    {
                        "type": "PushEvent",
                        "date": "2023-06-30T04:15:54Z"
                    },
                    {
                        "type": "PushEvent",
                        "date": "2023-06-30T03:43:58Z"
                    },
                    {
                        "type": "PushEvent",
                        "date": "2023-06-30T00:47:33Z"
                    },
                    {
                        "type": "PushEvent",
                        "date": "2023-06-30T00:22:39Z"
                    },
                    {
                        "type": "PushEvent",
                        "date": "2023-06-29T22:31:59Z"
                    },
                    {
                        "type": "PushEvent",
                        "date": "2023-06-29T20:50:31Z"
                    },
                    {
                        "type": "PushEvent",
                        "date": "2023-06-29T18:22:30Z"
                    },
                    {
                        "type": "PushEvent",
                        "date": "2023-06-29T17:31:46Z"
                    }
                ],
                "mostPopularRepoWorkedOn": {
                    "name": "linux",
                    "url": "https://github.com/torvalds/linux",
                    "stars": 154246,
                    "eventAction": "PushEvent"
                }
            }
        }
    }

    const recentData = {
        "success": true,
        "data": {
            "lastActive": {
                "action": "PushEvent",
                "date": "2023-07-10T17:19:48Z"
            },
            "lastCommit": {
                "name": "torvalds/linux",
                "date": "2023-07-10T17:19:48.000Z",
                "url": "https://github.com/torvalds/linux/commit/d3dccb0a487d065ce097e565d9ca8ae85d892a55"
            },
            "lastPullRequest": {
                "name": "libdc/pulls",
                "date": "2023-07-08T23:52:44.000Z",
                "url": "https://github.com/libdc/pulls/pull/undefined"
            },
            "mostRecentRepos": [
                {
                    "name": "linux",
                    "url": "https://github.com/torvalds/linux",
                    "date": "2023-07-10T17:19:48Z",
                    "action": "PushEvent"
                },
                {
                    "name": "linux",
                    "url": "https://github.com/torvalds/linux",
                    "date": "2023-07-09T20:56:14Z",
                    "action": "CreateEvent"
                },
                {
                    "name": "linux",
                    "url": "https://github.com/torvalds/linux",
                    "date": "2023-07-09T20:56:10Z",
                    "action": "PushEvent"
                }
            ]
        }
    }

    const mostPopularRepoData = {
        "success": true,
        "data": {
            "name": "linux",
            "url": "https://github.com/torvalds/linux",
            "stars": 154246,
            "forks": 48766,
            "watchers": 8184,
            "userType": "owner"
        }
    }

    switch (endpoint) {
        case "/getBasicUserData":
            // @ts-ignore
            return basicUserData;
        case "/getDateSensitiveData":
            // @ts-ignore
            return dateSensitiveData;
        case "/getRecentData":
            // @ts-ignore
            return recentData;
        case "/getMostPopularRepo":
            // @ts-ignore
            return mostPopularRepoData;
        default:
            throw "No Mock Data Available For The Following Endpoint: " + endpoint;
    }
}

export default getMockData;