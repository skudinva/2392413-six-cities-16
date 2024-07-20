import { CityEntity } from './types';

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

export type RatingGrade = {
  title: string;
  mark: number;
};

export const RatingTitle: [
  RatingGrade,
  RatingGrade,
  RatingGrade,
  RatingGrade,
  RatingGrade
] = [
  {
    title: 'perfect',
    mark: 5,
  },
  {
    title: 'good',
    mark: 4,
  },
  {
    title: 'not bad',
    mark: 3,
  },
  {
    title: 'badly',
    mark: 2,
  },
  {
    title: 'terribly',
    mark: 1,
  },
];

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const Cities: [
  CityEntity,
  CityEntity,
  CityEntity,
  CityEntity,
  CityEntity,
  CityEntity
] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
];

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const Setting = {
  review: { minLength: 50, maxLength: 300 },
};
