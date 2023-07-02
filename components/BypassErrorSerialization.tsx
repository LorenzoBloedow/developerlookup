"use client";
import { ApiRequest } from "../types";

interface BypassErrorSerializationProps {
    result: ApiRequest<unknown>;
}

function BypassErrorSerialization({ result }: BypassErrorSerializationProps) {
    if (!result.success) {
        throw result;
    }

    return <></>
}

export default BypassErrorSerialization;