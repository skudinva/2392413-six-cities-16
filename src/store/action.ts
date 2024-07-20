import { createAction, PrepareAction } from '@reduxjs/toolkit';
import { CityEntity, OfferEntity } from '../types';

export const setCurrentCity = createAction<PrepareAction<CityEntity>>(
  'setCurrentCity',
  (city: CityEntity) => ({ payload: city })
);

export const updateOffer = createAction<PrepareAction<OfferEntity[]>>(
  'updateOffer',
  (offers: OfferEntity[]) => ({ payload: offers })
);
