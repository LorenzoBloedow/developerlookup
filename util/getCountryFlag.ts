import { AddressType, Client, Language, PlaceInputType } from "@googlemaps/google-maps-services-js";
import Flag from "country-flag-icons/react/3x2";

export default async function getCountryFlag(location: string) {
    if (!location) {
        return false;
    }

    const client = new Client();
    const place = await client.findPlaceFromText({
        params: {
            key: process.env.GOOGLE_MAPS_API_KEY!,
            input: location,
            inputtype: PlaceInputType.textQuery,
            language: Language.en,
            // fields: ["adr_address"]
        }
    })

    const placeID = place?.data?.candidates?.[0]?.place_id;
    if (!placeID) {
        return false;
    }

    const { data } = await client.placeDetails({
        params: {
            key: process.env.GOOGLE_MAPS_API_KEY!,
            place_id: placeID,
            fields: ["address_components"]
        }
    })

    const locationData = data?.result?.address_components;
    if (!locationData) {
        return false;
    }

    for (const address of locationData) {
        if (address.types.includes(AddressType.country)) {
            // @ts-ignore
            const countryFlag = Flag?.[address.short_name]
            if (!countryFlag) {
                return false;
            }
            return countryFlag;
        }
    }
}