import { createReducer } from '@reduxjs/toolkit';
import { Cities, SortType } from '../const';
import { CityEntity } from '../types';
import { OfferEntity } from './../types';
import { setCurrentCity, setCurrentSort, setOffers } from './action';

type InitialState = {
  offers: OfferEntity[];
  currentCity: CityEntity;
  favorites: OfferEntity[];
  currentSort: SortType;
};

const initialState: InitialState = {
  offers: [],
  currentCity: Cities[0],
  favorites: [],
  currentSort: SortType.popular,
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
    });
});

export { reducer };
