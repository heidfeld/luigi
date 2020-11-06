import {stringifyUrl} from 'query-string';
import {PLACES_API} from './GoogleApiScheme';

const GOOGLE_FIND_PLACES_URL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json";

export const createFindPlaceRequestUrl = (apiKey, properties) => {

    const {
        text = ''
    } = properties;

    const queryParams = {
        key: apiKey,
        inputtype: PLACES_API.VALUES.INPUTTYPE.TEXT_QUERY,
        input: text
    };

    return stringifyUrl({
        url: GOOGLE_FIND_PLACES_URL,
        query: queryParams
    });

};