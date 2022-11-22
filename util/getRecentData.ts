export default async function getBasicUserData(username: string) {
    const data = await fetch(process.env.NEXT_PUBLIC_DOMAIN + "/api/getRecentData?username=" + username, { cache: "no-store" });
    if (data.status !== 200) {
        throw new Error(await data.text());
    } else {
        return await data.json();
    }
}