import { StatusCodes } from 'http-status-codes';
import { NameSpace, PostReviewState, SortType } from '../../const';
import {
  CityEntity,
  OfferByGroup,
  OfferDetailEntity,
  OfferEntity,
  ReviewEntity,
  State,
} from '../../types';

export const getOffers = (state: State): OfferEntity[] =>
  state[NameSpace.Data].offers;

export const getOffer = (state: State): OfferDetailEntity | null =>
  state[NameSpace.Data].offer;

export const getFavoriteOffers = (state: State): OfferEntity[] =>
  state[NameSpace.Data].favoriteOffers;

export const getFavoriteOffersByGroup = (state: State): OfferByGroup => {
  const offers = state[NameSpace.Data].favoriteOffers;
  return Object.groupBy(offers, (offer: OfferEntity) => offer.city.name);
};

export const getFavoriteOffersCount = (state: State): number =>
  state[NameSpace.Data].favoriteOffers.length;

export const getNearbyOffers = (state: State): OfferEntity[] =>
  state[NameSpace.Data].nearbyOffer;

export const getReviews = (state: State): ReviewEntity[] =>
  state[NameSpace.Data].reviews;

export const getPostReviewState = (state: State): PostReviewState =>
  state[NameSpace.Data].postReviewState;

export const getCurrentCityOffers = (state: State): OfferEntity[] => {
  const city = state[NameSpace.Data].currentCity;
  const offers = state[NameSpace.Data].offers;
  return offers.filter((offer) => city.name && offer.city.name === city.name);
};

export const getOffersLoadingState = (state: State): boolean =>
  state[NameSpace.Data].isOffersLoading;

export const getResponseStatusCode = (state: State): StatusCodes =>
  state[NameSpace.Data].responseStatusCode;

export const getCurrentCity = (state: State): CityEntity =>
  state[NameSpace.Data].currentCity;

export const getCurrentSort = (state: State): SortType =>
  state[NameSpace.Data].currentSort;
