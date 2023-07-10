import { ApiRequest, MostPopularRepo } from "../types";
import apiFetch from "./apiFetch";
import getMockData from "./getMockData";
import isProd from "./isProd";

function getMostPopularRepo(username: string): Promise<ApiRequest<MostPopularRepo, unknown>> {

    if (!isProd && process.env.USE_MOCK_DATA === "true") {
        return getMockData("/getMostPopularRepo");
    }

    return apiFetch("/getMostPopularRepo", { username });
}

export default getMostPopularRepo;