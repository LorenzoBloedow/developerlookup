import { NextApiRequest, NextApiResponse } from "next";
import { ApiError } from "../../types";
import { api, octokit } from "../getOctokit";

function handleOctokitError(req: NextApiRequest, res: NextApiResponse) {
    octokit.hook.error("request", async (err) => {
        console.log(1010101010)
        console.log(err);
        const rateLimit = await api.rateLimit.get();
        
        if (rateLimit.data.rate.remaining === 0) {
            const result: ApiError<"rateLimited"> = {
                success: false,
                data: {
                    code: "rateLimited",
                    message: "You're being rate limited",
                    extra: {
                        isLoggedIn: (typeof req.cookies?.["github-oauth-token"] === "string")
                    }
                }
            }

            throw result;
        } else {
            const result: ApiError<"unknown"> = {
                success: false,
                data: {
                    code: "unknown",
                    message: "Something went wrong"
                }
            }

            throw result;
        }
    });
}

export default handleOctokitError;