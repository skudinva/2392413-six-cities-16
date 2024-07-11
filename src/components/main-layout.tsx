import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../const';
import { MainProps } from '../types';
import SignUser from './sign-user';

function MainLayout({ authorizationStatus }: MainProps): JSX.Element {
  const { pathname } = useLocation();
  const isLoginForm = pathname === (AppRoute.Login as string);
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            {!isLoginForm && (
              <SignUser authorizationStatus={authorizationStatus} />
            )}
          </div>
        </div>
      </header>

      <Outlet />
    </div>
  );
}

export default MainLayout;
