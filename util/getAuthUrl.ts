import { v4 as uuid } from "uuid";

function getAuthUrl(currentUrl: string | null) {
    return (
        "https://github.com/login/oauth/authorize"
        + "?state=" + uuid()
        + "&client_id=" + process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
        + "&redirect_uri=" + `${process.env.NEXT_PUBLIC_DOMAIN}/auth/github${currentUrl ? `?prev=${currentUrl}` : ""}`
    );
}

export default getAuthUrl;