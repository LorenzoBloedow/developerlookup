import "server-only";

export default async function getRecentData(username: string) {
    return await (await fetch(process.env.NEXT_PUBLIC_DOMAIN + "/api/getRecentData?username=" + username, { cache: "no-cache" })).json();
}