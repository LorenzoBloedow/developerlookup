import { ApiRequest, MostRecentData } from "../types";
import apiFetch from "./apiFetch";

function getRecentData(username: string): Promise<ApiRequest<MostRecentData, unknown>> {
    return apiFetch("/getRecentData", { username });
}

export default getRecentData;