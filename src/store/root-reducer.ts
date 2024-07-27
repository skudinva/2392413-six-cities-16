import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offerProcess } from './offer-process/offer-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: offerProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
