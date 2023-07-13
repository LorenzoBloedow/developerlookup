import "client-only";
import { ApiRequest } from "../types";

async function authenticateUser(code?: string | null, state?: string | null): Promise<ApiRequest<undefined, unknown>> {
    const res = await fetch(
        process.env.NEXT_PUBLIC_DOMAIN + "/api/authenticateUser",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                code,
                state
            })
        }
    );

    if (res.status === 200) {
        return {
            success: true
        }
    }

    return {
        success: false,
        data: (await res.json())
    }
}

export default authenticateUser;