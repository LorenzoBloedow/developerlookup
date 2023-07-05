import "server-only";
import { ApiEndpoint, LooseObject } from "../types";
import { cookies } from "next/headers";

async function apiFetch(endpoint: ApiEndpoint, queryParams?: LooseObject, body?: LooseObject) {
    let finalEndpoint = `${process.env.NEXT_PUBLIC_DOMAIN}/api${endpoint}`;

    const queryKeys = Object.keys(queryParams || {});
    for (let i = 0; i < queryKeys.length; i++) {
        const key = queryKeys[i];
        // @ts-expect-error If queryParams is undefined this for loop will never run
        finalEndpoint += `${(i === 0) ? "?" : "&"}${key}=${queryParams[key]}`;
    }

    let headers: HeadersInit | undefined;
    const githubTokenCookie = cookies().get("github-oauth-token");
    if (githubTokenCookie) {
        headers = {
            Cookie: `${githubTokenCookie.name}=${githubTokenCookie.value}`
        }
    }

    const res = await fetch(
        finalEndpoint,
        {
            method: body ? "POST" : "GET",
            credentials: "same-origin",
            body: JSON.stringify(body),
            headers
        }
    );
    
    return await res.json();
}

export default apiFetch;