import { createAction, PrepareAction } from '@reduxjs/toolkit';
import { SortType } from '../const';
import { CityEntity, OfferEntity } from '../types';

export const setCurrentCity = createAction<PrepareAction<CityEntity>>(
  'setCurrentCity',
  (city: CityEntity) => ({ payload: city })
);

export const setOffers = createAction<PrepareAction<OfferEntity[]>>(
  'setOffers',
  (offers: OfferEntity[]) => ({ payload: offers })
);

export const setCurrentSort = createAction<PrepareAction<SortType>>(
  'setCurrentSort',
  (sort: SortType) => ({ payload: sort })
);
