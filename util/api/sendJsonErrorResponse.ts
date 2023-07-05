import { NextApiResponse } from "next";
import { ApiError } from "../../types";

function sendJsonErrorResponse(err: any, res: NextApiResponse) {
    // If it's a handled error
    if (typeof err?.success === "boolean" && typeof err?.data?.code === "string" && typeof err?.data?.message === "string") {
        res.status(500).end(JSON.stringify(err));
        return;
    }

    const error: ApiError<"unknown"> = {
        success: false,
        data: {
            code: "unknown",
            message: "Something went wrong"
        }
    }

    res.status(500).end(JSON.stringify(error));
}

export default sendJsonErrorResponse;