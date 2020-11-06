export const PLACES_API = {
    QUERY_PARAMETERS: {
        FIND_PLACE: {
            KEY: 'key',
            INPUT: 'input',
            INPUTTYPE: 'inputtype',
            //optional
            LANGUAGE: 'language',
            FIELDS: 'fields',
            LOCATION_BIAS: 'locationbias'
        },
        NEARBY_SEARCH: {
            KEY: 'key',
            LOCATION: 'location',
            RADIUS: 'radius',
            //optional
            KEYWORD: 'keyword',
            LANGUAGE: 'language',
            NAME: 'name',
            TYPE: 'type'
        },
        TEXT_SEARCH: {
            KEY: 'key',
            QUERY: 'query',
            //optional
            REGION: 'region',
            LOCATION: 'location',
            RADIUS: 'radius',
            TYPE: 'type',
            LANGUAGE: 'language'
        }
    },
    VALUES: {
        OUTPUT: {
            JSON: 'json',
            XML: 'xml'
        },
        INPUTTYPE: {
            TEXT_QUERY: 'textquery',
            PHONE_NUMBER: 'phonenumber'
        },
        LANGUAGE: {
            POLISH: 'pl',
            ENGLISH: 'en'
        },
        FIELDS: {
            BASIC: {
                BUSINESS_STATUS: 'business_status',
                FORMATTED_ADDRESS: 'formatted_address',
                GEOMETRY: 'geometry',
                ICON: 'icon',
                NAME: 'name',
                PHOTOS: 'photos',
                PLACE_ID: 'place_id',
                PLUS_CODE: 'plus_code',
                TYPES: 'types'
            },
            CONTACT: {
                OPENING_HOURS: 'opening_hours'
            },
            ATMOSPHERE: {
                PRICE_LEVEL: 'price_level',
                RATING: 'rating',
                USER_RATINGS_TOTAL: 'user_ratings_total'
            }
        }
    }
};