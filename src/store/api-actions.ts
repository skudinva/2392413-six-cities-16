import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { AppDispatch, OfferEntity, State } from '../types';
import { setOffers } from './action';

type AsyncThunkPropWithAxios = {
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
};

export const fetchOfferAction = createAsyncThunk<
  void,
  undefined,
  AsyncThunkPropWithAxios
>('setOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<OfferEntity[]>(APIRoute.Offers);
  dispatch(setOffers(data));
});
