import { NextApiRequest, NextApiResponse } from "next";
import { ApiError } from "../../types";
import { api, octokit } from "../getOctokit";

function handleOctokitError(req: NextApiRequest, res: NextApiResponse) {
    octokit.hook.error("request", async () => {
        const rateLimit = await api.rateLimit.get();
        
        if (rateLimit.data.rate.remaining === 0) {
            const result: ApiError<"rateLimited">["data"] = {
                code: "rateLimited",
                message: "You're being rate limited",
                extra: {
                    isLoggedIn: (typeof req.cookies?.["github-oauth-token"] === "string")
                }
            }

            return res.status(429).send(result);
        } else {
            const result: ApiError<"unknown">["data"] = {
                code: "unknown",
                message: "Something went wrong"
            }
            return res.status(500).send(result);
        }
    });
}

export default handleOctokitError;