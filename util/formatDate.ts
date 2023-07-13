import "server-only";
import { headers } from "next/headers";

export default function formatDate(date: string, type: "long" | "short" = "long") {
    let dateFormat;
    const headersInstance = headers();
    const locale = headersInstance.get("Accept-Language");

    if (!locale) {
        dateFormat = Intl.DateTimeFormat("en-US", {
            month: type,
            day: "numeric",
            year: "numeric",
        });
    } else {
        dateFormat = Intl.DateTimeFormat(locale.split(",")[0], {
            month: type,
            day: "numeric",
            year: "numeric",
        });
    }

    return dateFormat.format(new Date(date));
}