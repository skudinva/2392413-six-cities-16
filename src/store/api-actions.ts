import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus } from '../const';
import { setToken } from '../services/token';
import { AppDispatch, OfferEntity, State, UserLoginStatus } from '../types';
import {
  setAuthorizationStatus,
  setOffers,
  setOffersLoading,
  setUserProfile,
} from './action';

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
  dispatch(setOffersLoading(true));
  const { data } = await api.get<OfferEntity[]>(APIRoute.Offers);
  dispatch(setOffers(data));
  dispatch(setOffersLoading(false));
});

export const checkLoginAction = createAsyncThunk<
  void,
  undefined,
  AsyncThunkPropWithAxios
>('checkLogin', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<UserLoginStatus>(APIRoute.Login);
    /*
     const data: UserLoginStatus = {
      name: 'SkudinVA',
      avatarUrl: '',
      isPro: false,
      email: 'skudinva@gmail.com',
      token: 'jhsgjhs78^*&',
    };*/
    setToken(data.token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(setUserProfile(data));
  } catch {
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
});
