import { ApiRequest, MostPopularRepo } from "../types";
import apiFetch from "./apiFetch";

async function getMostPopularRepo(username: string): Promise<ApiRequest<MostPopularRepo, unknown>> {
    const res = await apiFetch("/getMostPopularRepo", { username });

    return {
        success: res.status === 200,
        data: {
            ...(await res.json())
        }
    }
}

export default getMostPopularRepo;