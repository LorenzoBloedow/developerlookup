import { NextApiRequest, NextApiResponse } from "next";
import { ApiError, LooseObject } from "../../types";
import { api, octokit } from "../getOctokit";
import sleep from "../sleep";

function handleOctokitError(req: NextApiRequest, res: NextApiResponse) {
    octokit.hook.error("request", async (err: LooseObject) => {

        const retryAfterSeconds = err?.response?.headers?.["retry-after"];
        const documentationUrl = "https://docs.github.com/en/free-pro-team@latest/rest/overview/resources-in-the-rest-api#secondary-rate-limits";
        const errorMessage = "You have exceeded a secondary rate limit. Please wait a few minutes before you try again.";

        // GitHub doesn't have a code for this error and they
        // stated that retry-after can sometimes not be returned,
        // so this is an attempt at identifying the error
        if (retryAfterSeconds || err?.response?.data?.documentation_url === documentationUrl || err?.response?.data?.message === errorMessage) {

            // uncomment these lines when Next.js supports sending readable stream objects to the client
            // const result: ApiError<"rateLimitedSecondary"> = {
            //     success: false,
            //     data: {
            //         code: "rateLimitedSecondary",
            //         message: "You're being rate limited because the requests are being sent too fast",
            //         extra: {
            //             retryAfter: retryAfterSeconds || null
            //         }
            //     }
            // }
            // res.write(result);

            // Because octokit is set to retry, it will retry the request after waiting the amount specified
            await sleep((retryAfterSeconds || 60) * 1000);
            return;
        }

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