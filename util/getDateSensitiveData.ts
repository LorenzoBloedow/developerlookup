import "server-only";

export default async function getDateSensitiveData(username: string) {
    return await (await fetch(process.env.NEXT_PUBLIC_DOMAIN + "/api/getDateSensitiveData?username=" + username, { cache: "no-cache" })).json();
}