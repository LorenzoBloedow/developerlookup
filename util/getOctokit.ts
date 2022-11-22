import { createOAuthAppAuth } from "@octokit/auth-oauth-app";
import { retry } from "@octokit/plugin-retry";
import { Octokit } from "@octokit/rest";

const MyOctokit = Octokit.plugin(retry);
const octokit = new MyOctokit({
    authStrategy: createOAuthAppAuth,
    auth: {
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET
    },
    request: { retries: 5 },
    doNotRetry: [
        403
    ]
});
const api = octokit.rest;

export { octokit, api };