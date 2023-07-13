"use client";

interface BypassErrorSerializationProps {
    result: {
        success: boolean;
        [key: string]: any;
    };
}

function BypassErrorSerialization({ result }: BypassErrorSerializationProps) {
    if (!result.success) {
        throw result;
    }

    return <></>
}

export default BypassErrorSerialization;