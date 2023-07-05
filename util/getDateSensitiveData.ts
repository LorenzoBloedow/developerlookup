import { ApiRequest, DateSensitiveData } from "../types";
import apiFetch from "./apiFetch";

async function getDateSensitiveData(username: string): Promise<ApiRequest<DateSensitiveData, unknown>> {
    const res = await apiFetch("/getDateSensitiveData", { username });
    
    return {
        success: res.status === 200,
        data: {
            ...(await res.json())
        }
    }
}

export default getDateSensitiveData;