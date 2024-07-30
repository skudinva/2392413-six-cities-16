import { screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { renderWithStoreAndHistoryComponent } from '../utils/mock-component';
import { makeFakeState } from '../utils/mocks';
import PrivateRoute from './private-route';

describe('Component: PrivateRoute', () => {
  let mockHistory: MemoryHistory;
  const state = makeFakeState();

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(AppRoute.Favorites);
  });

  it('should render component for public route, when user not authorized', () => {
    const expectedText = 'public route';
    const notExpectedText = 'private route';
    state.USER.authorizationStatus = AuthorizationStatus.NoAuth;

    renderWithStoreAndHistoryComponent(
      <Routes>
        <Route path={AppRoute.Login} element={<span>{expectedText}</span>} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <span>{notExpectedText}</span>
            </PrivateRoute>
          }
        />
      </Routes>,
      state,
      mockHistory
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorized', () => {
    const expectedText = 'private route';
    const notExpectedText = 'public route';
    state.USER.authorizationStatus = AuthorizationStatus.Auth;

    renderWithStoreAndHistoryComponent(
      <Routes>
        <Route path={AppRoute.Login} element={<span>{notExpectedText}</span>} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <span>{expectedText}</span>
            </PrivateRoute>
          }
        />
      </Routes>,
      state,
      mockHistory
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.queryByText(notExpectedText)).not.toBeInTheDocument();
  });
});
