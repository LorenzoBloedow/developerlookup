import "server-only";

export default async function getMostPopularRepo(username: string) {
    return await (await fetch(process.env.NEXT_PUBLIC_DOMAIN + "/api/getMostPopularRepo?username=" + username, { cache: "no-cache" })).json();
}