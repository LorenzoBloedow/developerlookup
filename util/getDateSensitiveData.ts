import { ApiRequest, DateSensitiveData } from "../types";
import apiFetch from "./apiFetch";

function getDateSensitiveData(username: string): Promise<ApiRequest<DateSensitiveData, unknown>> {
    return apiFetch("/getDateSensitiveData", { username });
}

export default getDateSensitiveData;