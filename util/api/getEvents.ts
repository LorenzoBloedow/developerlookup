import { octokit, api } from "../../util/getOctokit";

async function getEvents(username: string) {
    let allEvents = [];
    
    // @ts-ignore TODO
    for await (const response of octokit.paginate.iterator(api.activity.listPublicEventsForUser, { username })) {
        const events = response.data;
        allEvents.push(events);
    }

    allEvents = allEvents.flat();

    return allEvents;
}

export default getEvents;