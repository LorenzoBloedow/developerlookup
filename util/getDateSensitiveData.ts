import { ApiRequest, DateSensitiveData } from "../types";
import apiFetch from "./apiFetch";
import getMockData from "./getMockData";
import isProd from "./isProd";

function getDateSensitiveData(username: string): Promise<ApiRequest<DateSensitiveData, unknown>> {

    if (!isProd && process.env.USE_MOCK_DATA === "true") {
        return getMockData("/getDateSensitiveData");
    }

    return apiFetch("/getDateSensitiveData", { username });
}

export default getDateSensitiveData;