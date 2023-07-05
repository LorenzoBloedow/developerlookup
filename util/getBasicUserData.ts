import { ApiRequest, BasicUserData } from "./../types/index.d";
import apiFetch from "./apiFetch";

function getBasicUserData(username: string): Promise<ApiRequest<BasicUserData, unknown>> {
    return apiFetch("/getBasicUserData", { username });
}

export default getBasicUserData;