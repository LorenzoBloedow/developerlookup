import { ApiRequest, BasicUserData } from "./../types/index.d";
import apiFetch from "./apiFetch";

async function getBasicUserData(username: string): Promise<ApiRequest<BasicUserData, unknown>> {
    const res = await apiFetch("/getBasicUserData", { username });

    return {
        success: res.status === 200,
        data: {
            ...(await res.json())
        }
    }
}

export default getBasicUserData;