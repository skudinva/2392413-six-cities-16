import { AuthorizationStatus, NameSpace } from '../../const';
import { makeFakeOffers } from '../../mocks';
import { AuthInfo, State } from '../../types';
import {
  getAuthCheckedStatus,
  getAuthorizationStatus,
  getIsAuthUser,
  getUserProfile,
} from './selectors';

const state: State = makeFakeOffers();

describe('Users selectors', () => {
  it('should return authorizationStatus from state', () => {
    const authorizationStatus = AuthorizationStatus.Auth;
    state[NameSpace.User].authorizationStatus = authorizationStatus;
    const result = getAuthorizationStatus(state);
    expect(result).toBe(authorizationStatus);
  });

  it('should return "true" because authorizationStatus "Auth"', () => {
    const authorizationStatus = AuthorizationStatus.Auth;
    state[NameSpace.User].authorizationStatus = authorizationStatus;
    const result = getAuthCheckedStatus(state);
    expect(result).toBe(true);
  });

  it('should return "true" because authorizationStatus "Auth"', () => {
    const authorizationStatus = AuthorizationStatus.Auth;
    state[NameSpace.User].authorizationStatus = authorizationStatus;
    const result = getIsAuthUser(state);
    expect(result).toBe(true);
  });

  it('should return test profile object', () => {
    const userProfile: AuthInfo = {
      email: 'test@test.ru',
      avatarUrl: '/test/test.jpg',
      isPro: false,
      name: 'testName',
      token: 'test--test',
    };
    state[NameSpace.User].userProfile = userProfile;
    const result = getUserProfile(state);
    expect(result).toBe(userProfile);
  });
});
