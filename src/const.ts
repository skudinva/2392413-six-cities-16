import { offers } from './mocks/offers';
import { getCities } from './utils';

export const Setting = {
  OffersCount: 5,
};

export enum AppRoute {
  Main = '/',
  'Login' = '/login',
  'Favorites' = '/favorites',
  'Offer' = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const cities = getCities(offers);

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
