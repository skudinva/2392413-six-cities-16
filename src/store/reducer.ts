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
  appendFavoriteOffer,
  appendReview,
  deleteFavoriteOffer,
  setAuthorizationStatus,
  setCurrentCity,
  setCurrentSort,
  setFavoriteOffers,
  setNearbyOffers,
  setOffer,
  setOffers,
  setOffersLoading,
  setReviews,
  setUserProfile,
} from './action';

type InitialState = {
  offers: OfferEntity[];
  offer: OfferDetailEntity | null;
  nearbyOffer: OfferEntity[];
  reviews: ReviewEntity[] | [];
  currentCity: CityEntity;
  favoriteOffers: OfferEntity[];
  currentSort: SortType;
  authorizationStatus: AuthorizationStatus;
  userProfile: AuthInfo | null;
  isOffersLoading: boolean;
};

const initialState: InitialState = {
  offers: [],
  offer: null,
  nearbyOffer: [],
  reviews: [],
  currentCity: Cities[0],
  favoriteOffers: [],
  currentSort: SortType.popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  userProfile: null,
  isOffersLoading: false,
};

const setIsFavoriteState = (
  offers: OfferEntity[],
  newOfferState: OfferEntity
): void => {
  offers.some((offer) => {
    if (offer.id === newOfferState.id) {
      offer.isFavorite = newOfferState.isFavorite;
      return true;
    }
  });
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
    })
    .addCase(appendFavoriteOffer, (state, action) => {
      state.favoriteOffers = [...state.favoriteOffers, action.payload];
      setIsFavoriteState(state.offers, action.payload);
    })
    .addCase(deleteFavoriteOffer, (state, action) => {
      state.favoriteOffers = state.favoriteOffers.filter(
        (offer) => offer.id !== action.payload.id
      );
      setIsFavoriteState(state.offers, action.payload);
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffer = action.payload;
    })
    .addCase(setFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    });
});

export { reducer };
