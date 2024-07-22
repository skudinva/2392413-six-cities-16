import { createAction, PrepareAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortType } from '../const';
import {
  AuthInfo,
  CityEntity,
  OfferDetailEntity,
  OfferEntity,
  ReviewEntity,
} from '../types';

export const setCurrentCity = createAction<PrepareAction<CityEntity>>(
  'setCurrentCity',
  (city: CityEntity) => ({ payload: city })
);

export const setOffers = createAction<PrepareAction<OfferEntity[]>>(
  'setOffers',
  (offers: OfferEntity[]) => ({ payload: offers })
);

export const setOffer = createAction<PrepareAction<OfferDetailEntity>>(
  'setOffer',
  (offer: OfferDetailEntity) => ({ payload: offer })
);

export const setReviews = createAction<PrepareAction<ReviewEntity[]>>(
  'setReviews',
  (reviews: ReviewEntity[]) => ({ payload: reviews })
);

export const appendReview = createAction<PrepareAction<ReviewEntity>>(
  'appendReview',
  (review: ReviewEntity) => ({ payload: review })
);

export const setCurrentSort = createAction<PrepareAction<SortType>>(
  'setCurrentSort',
  (sort: SortType) => ({ payload: sort })
);

export const setAuthorizationStatus = createAction<
  PrepareAction<AuthorizationStatus>
>('setAuthorizationStatus', (status: AuthorizationStatus) => ({
  payload: status,
}));

export const setOffersLoading = createAction<boolean>('setOffersLoading');

export const setUserProfile = createAction<PrepareAction<AuthInfo>>(
  'setUserProfile',
  (user: AuthInfo) => ({ payload: user })
);

export const setError = createAction<string | null>('setError');
