import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { logoutAction } from '../store/api-actions';

function SignUser(): JSX.Element {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const userProfile = useAppSelector((state) => state.userProfile);
  const favoriteOffers = useAppSelector((state) => state.favoriteOffers);
  const isAuthUser = authorizationStatus === AuthorizationStatus.Auth;
  const dispatch = useAppDispatch();

  const onLogout = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={AppRoute.Favorites}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            {isAuthUser && userProfile ? (
              <>
                <span className="header__user-name user__name">
                  {userProfile.email}
                </span>
                <span className="header__favorite-count">
                  {favoriteOffers.length}
                </span>
              </>
            ) : (
              <span className="header__login">Sign in</span>
            )}
          </Link>
        </li>
        {isAuthUser && (
          <li className="header__nav-item">
            <Link className="header__nav-link" to="" onClick={onLogout}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default SignUser;
