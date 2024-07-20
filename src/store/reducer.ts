import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../const';
import { offers } from '../mocks/offers';
import { CityEntity } from '../types';
import { getCityOffers } from '../utils';
import { OfferEntity } from './../types';
import { setCurrentCity, updateOffer } from './action';

type InitialState = {
  offers: OfferEntity[];
  currentCity: CityEntity;
  cityOffers: OfferEntity[];
  favorites: OfferEntity[];
};

const initialState: InitialState = {
  offers: offers,
  currentCity: Cities[0],
  cityOffers: getCityOffers(offers, Cities[0], 5),
  favorites: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCurrentCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(updateOffer, (state, action) => {
      state.cityOffers = action.payload;
    });
});

export { reducer };
