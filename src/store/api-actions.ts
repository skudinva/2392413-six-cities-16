import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute, AuthorizationStatus } from '../const';
import { dropToken, setToken } from '../services/token';
import {
  AppDispatch,
  AuthInfo,
  OfferDetailEntity,
  OfferEntity,
  ReviewEntity,
  State,
} from '../types';
import {
  appendReview,
  setAuthorizationStatus,
  setOffer,
  setOffers,
  setOffersLoading,
  setReviews,
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
>('fetchOfferAction', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersLoading(true));
  const { data } = await api.get<OfferEntity[]>(APIRoute.Offers);
  dispatch(setOffers(data));
  dispatch(setOffersLoading(false));
});

export const fetchOfferDetailAction = createAsyncThunk<
  void,
  { id: string | undefined },
  AsyncThunkPropWithAxios
>('fetchOfferDetailAction', async ({ id }, { dispatch, extra: api }) => {
  const { data } = await api.get<OfferDetailEntity>(`${APIRoute.Offers}/${id}`);
  dispatch(setOffer(data));
});

export const checkLoginAction = createAsyncThunk<
  void,
  undefined,
  AsyncThunkPropWithAxios
>('checkLoginAction', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get<AuthInfo>(APIRoute.Login);
    setToken(data.token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(setUserProfile(data));
  } catch {
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
});

type LoginAuth = {
  email: string;
  password: string;
};

export const loginAction = createAsyncThunk<
  void,
  LoginAuth,
  AsyncThunkPropWithAxios
>('loginAction', async ({ email, password }, { dispatch, extra: api }) => {
  const requestBody: LoginAuth = {
    email: email,
    password: password,
  };

  try {
    const { data } = await api.post<AuthInfo>(APIRoute.Login, requestBody);
    setToken(data.token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(setUserProfile(data));
  } catch (error) {
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  }
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  AsyncThunkPropWithAxios
>('logoutAction', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.delete(APIRoute.Logout);
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  } catch (error) {
    throw new Error('Error logoff');
  } finally {
    dispatch(setUserProfile(null));
    dropToken();
  }
});

export const fetchReviewAction = createAsyncThunk<
  void,
  { id: string | undefined },
  AsyncThunkPropWithAxios
>('fetchReviewAction', async ({ id }, { dispatch, extra: api }) => {
  const { data } = await api.get<ReviewEntity[]>(`${APIRoute.Comments}/${id}`);
  dispatch(setReviews(data));
});

export type PostReview = {
  id: string;
  comment: string;
  rating: number;
};

export const PostReviewAction = createAsyncThunk<
  void,
  PostReview,
  AsyncThunkPropWithAxios
>(
  'PostReviewAction',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<ReviewEntity>(
        `${APIRoute.Comments}/${id}`,
        {
          comment: comment,
          rating: rating,
        }
      );

      dispatch(appendReview(data));
    } catch (error) {
      //dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);
