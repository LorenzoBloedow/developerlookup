import { ApiRequest, MostPopularRepo } from "../types";
import apiFetch from "./apiFetch";

function getMostPopularRepo(username: string): Promise<ApiRequest<MostPopularRepo, unknown>> {
    return apiFetch("/getMostPopularRepo", { username });
}

export default getMostPopularRepo;