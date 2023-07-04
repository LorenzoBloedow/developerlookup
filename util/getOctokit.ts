import { createOAuthAppAuth, createOAuthUserAuth } from "@octokit/auth-oauth-app";
import { retry } from "@octokit/plugin-retry";
import { Octokit } from "@octokit/rest";
import { getCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";
import { LooseObject } from "../types";

const MyOctokit = Octokit.plugin(retry);

const options: LooseObject = {
    authStrategy: createOAuthAppAuth,
    auth: {
        clientType: "oauth-app",
        clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
    request: {
        retries: 3
    },
    doNotRetry: [
        403
    ]
}

let octokit = new MyOctokit(options);
let api = octokit.rest;
function authenticateUser(req: NextApiRequest, res: NextApiResponse) {
    const authToken = getCookie("github-oauth-token", { req, res });
    if (typeof authToken !== "string") return;

    options.authStrategy = createOAuthUserAuth;
    options.auth.token = authToken;

    octokit = new MyOctokit(options);
    api = octokit.rest;
}

export { octokit, api, authenticateUser }