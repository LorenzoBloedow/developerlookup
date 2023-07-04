import { ApiRequest, MostRecentData } from "../types";
import apiFetch from "./apiFetch";

async function getRecentData(username: string): Promise<ApiRequest<MostRecentData>> {
    const res = await apiFetch("/getRecentData", { username });
    
    return {
        success: res.status === 200,
        data: {
            ...(await res.json())
        }
    }
}

export default getRecentData;