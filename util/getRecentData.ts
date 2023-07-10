import { ApiRequest, MostRecentData } from "../types";
import apiFetch from "./apiFetch";
import getMockData from "./getMockData";
import isProd from "./isProd";

function getRecentData(username: string): Promise<ApiRequest<MostRecentData, unknown>> {
    
    if (!isProd && process.env.USE_MOCK_DATA === "true") {
        return getMockData("/getRecentData");
    }

    return apiFetch("/getRecentData", { username });
}

export default getRecentData;