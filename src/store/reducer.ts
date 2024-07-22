import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, Cities, SortType } from '../const';
import { CityEntity, UserLoginStatus } from '../types';
import { OfferEntity } from './../types';
import {
  setAuthorizationStatus,
  setCurrentCity,
  setCurrentSort,
  setOffers,
  setOffersLoading,
  setUserProfile,
} from './action';

type InitialState = {
  offers: OfferEntity[];
  currentCity: CityEntity;
  favorites: OfferEntity[];
  currentSort: SortType;
  authorizationStatus: AuthorizationStatus;
  userProfile: UserLoginStatus | null;
  isOffersLoading: boolean;
};

const initialState: InitialState = {
  offers: [],
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
    });
});

export { reducer };
