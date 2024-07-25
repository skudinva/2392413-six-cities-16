import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { postFavoriteOfferAction } from '../store/api-actions';

type FavoriteButtonProps = {
  baseClass: string;
  id: string;
  isFavorite: boolean;
  children: JSX.Element;
};

function FavoriteButton(props: FavoriteButtonProps): JSX.Element {
  const { id, baseClass, children, isFavorite } = props;
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  const isAuth = authorizationStatus === AuthorizationStatus.Auth;
  const navigate = useNavigate();

  const onFavoriteButtonClick = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    if (!isAuth) {
      navigate(AppRoute.Login);
      return;
    }
    evt.stopPropagation();

    dispatch(
      postFavoriteOfferAction({
        id,
        isFavorite: !isFavorite,
      })
    );
  };

  return (
    <button
      className={classNames(`${baseClass}__bookmark-button`, 'button', {
        [`${baseClass}__bookmark-button--active`]: isFavorite,
      })}
      type="button"
      onClick={onFavoriteButtonClick}
    >
      {children}
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}
export default FavoriteButton;
