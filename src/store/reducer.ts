import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../const';
import { CityEntity } from '../types';
import { OfferEntity } from './../types';
import { setCurrentCity, setOffers } from './action';

type InitialState = {
  offers: OfferEntity[];
  currentCity: CityEntity;
  favorites: OfferEntity[];
};

const initialState: InitialState = {
  offers: [],
  currentCity: Cities[0],
  favorites: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
