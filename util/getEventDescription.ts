export default function getEventActionDescription(eventName: string, action?: string) {
    switch (eventName) {
        case "CommitCommentEvent":
            return "Left a comment on the commit";

        case "CreateEvent":
            return "Created a new repository or branch";

        case "DeleteEvent":
            return "Deleted a repository or branch";

        case "ForkEvent":
            return "Forked a repository";

        case "GollumEvent":
            return "Created or updated a wiki page";

        case "IssueCommentEvent":
            return "Left a comment on an issue or PR"

        case "IssuesEvent":
            return "Interacted with an issue";

        case "MemberEvent":
            return "Accepted an invitation to a repository";

        case "PublicEvent":
            return "Made a private repository public";

        case "PullRequestEvent":
            return "Interacted with their pull request";

        case "PullRequestReviewEvent":
            return "Submitted a pull request review";

        case "PullRequestReviewCommentEvent":
            return "Commented on a pull request review";

        case "PullRequestReviewThreadEvent":
            switch (action) {
                case "resolved":
                    return "Marked a comment thread on a pull request as resolved";
                case "unresolved":
                    return "Marked a comment thread on a pull request as resolved";
                default:
                    return "Marked a comment thread on a PR as either resolved or unresolved."
            }

        case "PushEvent":
            return "Pushed to a remote repository";

        case "ReleaseEvent":
            return "Released a new version of a software";
        
        case "SponsorshipEvent":
            return "Sponsored an open-source developer";

        case "WatchEvent":
            return "Starred a repository";
        
        default:
            return "We weren't able to detect what the user did here.";
    }
}