import "server-only";

export default async function getBasicUserData(username: string) {
    return await (await fetch(process.env.NEXT_PUBLIC_DOMAIN + "/api/getBasicUserData?username=" + username, { cache: "no-cache" })).json();
}