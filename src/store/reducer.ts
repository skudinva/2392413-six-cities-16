import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, Cities, SortType } from '../const';
import {
  AuthInfo,
  CityEntity,
  OfferDetailEntity,
  ReviewEntity,
} from '../types';
import { OfferEntity } from './../types';
import {
  appendReview,
  setAuthorizationStatus,
  setCurrentCity,
  setCurrentSort,
  setOffer,
  setOffers,
  setOffersLoading,
  setReviews,
  setUserProfile,
} from './action';

type InitialState = {
  offers: OfferEntity[];
  offer: OfferDetailEntity | null;
  reviews: ReviewEntity[] | [];
  currentCity: CityEntity;
  favorites: OfferEntity[];
  currentSort: SortType;
  authorizationStatus: AuthorizationStatus;
  userProfile: AuthInfo | null;
  isOffersLoading: boolean;
};

const initialState: InitialState = {
  offers: [],
  offer: null,
  reviews: [],
  currentCity: Cities[0],
  favorites: [],
  currentSort: SortType.popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  userProfile: null,
  isOffersLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setCurrentSort, (state, action) => {
      state.currentSort = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setOffersLoading, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setUserProfile, (state, action) => {
      state.userProfile = action.payload;
    })
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(appendReview, (state, action) => {
      state.reviews = [...state.reviews, action.payload];
    });
});

export { reducer };
