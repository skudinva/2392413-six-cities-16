import { StatusCodes } from 'http-status-codes';
import { Route, Routes } from 'react-router-dom';
import browserHistory from '../browser-history';
import { AppRoute, AuthorizationStatus } from '../const';
import { useAppSelector } from '../hooks/store';
import Favorite from '../pages/favorite';
import Login from '../pages/login';
import Main from '../pages/main';
import HistoryRouter from './history-route';
import Loader from './loader/loader';
import MainLayout from './main-layout';
import Offer from './offer';
import Page404 from './page404';
import PrivateRoute from './private-route';

function App(): JSX.Element {
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  const responseStatus = useAppSelector((state) => state.responseStatus);
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  if (responseStatus === StatusCodes.NOT_FOUND) {
    return <Page404 />;
  }

  if (isOffersLoading || authorizationStatus === AuthorizationStatus.Unknown) {
    return <Loader />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute>
                <Favorite />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<Offer />} />
        </Route>
        <Route path={AppRoute.Unknown} element={<Page404 />} />
      </Routes>
    </HistoryRouter>
  );
}
export default App;
