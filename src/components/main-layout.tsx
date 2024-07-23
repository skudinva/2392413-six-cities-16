import { Link, Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../const';
import SignUser from './sign-user';

function MainLayout(): JSX.Element {
  const { pathname } = useLocation();
  const isLoginForm = pathname === String(AppRoute.Login);
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className="header__logo-link header__logo-link--active"
                to={AppRoute.Main}
              >
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
            {!isLoginForm && <SignUser />}
          </div>
        </div>
      </header>

      <Outlet />
    </div>
  );
}

export default MainLayout;
