import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { AppProps } from '../types';
import FavoriteList from './favorite-list';
import Login from './login';
import Main from './main';
import MainLayout from './main-layout';
import Offer from './offer';
import Page404 from './page404';
import PrivateRoute from './private-route';

function App({ offersCount, offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainLayout authorizationStatus={AuthorizationStatus.NoAuth} />
          }
        >
          <Route
            index
            element={<Main offersCount={offersCount} offers={offers} />}
          />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoriteList offers={offers} />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<Offer offer={offers[0]} />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
