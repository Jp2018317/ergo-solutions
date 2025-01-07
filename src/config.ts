// Global App Config

// FA_CONFIG_PARAMS
export const FA_CLIENT_ISSUER = process.env.FUSIONAUTH_ISSUER;
export const FA_CLIENT_ID = process.env.FUSIONAUTH_CLIENT_ID;
export const FA_CLIENT_SECRET = process.env.FUSIONAUTH_CLIENT_SECRET;
export const FA_TENTANT_ID = process.env.FUSIONAUTH_TENANT_ID;

// FA_ERROR
export const FA_ERROR_MESSAGE = 'Missing FusionAuth configuration';

// ERRORS
export const WRAPPER_ERROR = 'Wrapper must have children';

// ERROR TYPES
export const SERVER_ERROR_TYPE = 'SERVER_ERROR';
export const INVALID_PAYLOAD_ERROR_TYPE = 'INVALID_PAYLOAD';
export const FETCH_ERROR_TYPE = 'FETCH_ERROR';
export const UNAUTHORIZED_ERROR_TYPE = 'UNAUTHORIZED';
export const URL_PARSE_ERROR_TYPE = 'URL_PARSE_ERROR';
export const NO_DATA_ERROR_TYPE = 'NO_DATA_ERROR';

// ERROR MESSAGES
export const SERVER_ERROR_MESSAGE = 'AN ERROR IN THE SERVER OCCURRED';
export const REQUEST_ERROR_MESSAGE = 'AN ERROR OCCURRED WHILE PROCESSING THE RESPONSE';
export const FETCH_ERROR_MESSAGE = 'AN ERROR OCCURRED REQUESTING THE SERVER, THE SERVER MAY BE DOWN, UNREACHABLE OR AN UNHANDLED ERROR OCCURRED';
export const UNAUTHORIZED_ERROR_MESSAGE = 'THE USER IS NOT AUTHORIZED TO PERFORM THIS ACTION';
export const URL_PARSE_ERROR_MESSAGE = 'FAILED TO PARSE THE REQUEST URL';
export const NO_DATA_ERROR_MESSAGE = 'NO DATA RETURNED';
export const INVALID_PAYLOAD_ERROR_MESSAGE = 'REQUIREMENTS NOT MET';

// NEXTAUTH_URL
export const NEXTAUTH_URL = process.env.NEXTAUTH_URL || 'NEXTAUTH_URL not found';
export const API_URL = process.env.API_HOST_URL || 'Host URL not found';
export const API_BUSINESSES = `${API_URL}/businesses/v1`;
export const API_PRODUCTS = `${API_URL}/products/v1`;
export const API_FILES = `${API_URL}/files/v1`;
export const API_EVENTS = `${API_URL}/events/v1`;
export const API_ACCOUNTS = `${API_URL}/accounts/v1`;

// MAPBOX_ACCESS_TOKEN
export const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN || 'Mapbox Access Token not found';

export type RouteNames =
  '/'
  | '/auth/sign-in'
  | '/auth/sign-out'
  | '/search/businesses'
  | '/search/events'
  | '/search/offers'
  | '/example'; // Example route to satisfy eslint in navbar

export type Route = {
  key: string;
  label: string;
  routeName: RouteNames;
};

export const routes = {
  root: '/',
  dashboard: {
    root: 'dashboard',
    create: 'dashboard/create',
    business: {
      root: 'dashboard/business',
    },
  },
} as const;

export const SUPPORTED_LOCALES = ['en', 'es'] as const;
export type SUPPORTED_LOCALES_VALUES = typeof SUPPORTED_LOCALES[number];

export type SearchDistance = 'around' | '2km' | '5km' | '10km';

export type DistanceOptions = {
  label: string;
  value: SearchDistance;
}[];

export const DISTANCE_OPTIONS: DistanceOptions = [
  {
    label: 'Around',
    value: 'around',
  },
  {
    label: '2 KM',
    value: '2km',
  },
  {
    label: '5 KM',
    value: '5km',
  },
  {
    label: '10 KM',
    value: '10km',
  },
];
