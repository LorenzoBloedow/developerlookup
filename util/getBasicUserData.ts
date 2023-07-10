import { ApiRequest, BasicUserData } from "./../types/index.d";
import apiFetch from "./apiFetch";
import getMockData from "./getMockData";
import isProd from "./isProd";

function getBasicUserData(username: string): Promise<ApiRequest<BasicUserData, unknown>> {

    if (!isProd && process.env.USE_MOCK_DATA === "true") {
        return getMockData("/getBasicUserData");
    }

    return apiFetch("/getBasicUserData", { username });
}

export default getBasicUserData;