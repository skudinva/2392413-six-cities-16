import classNames from 'classnames';
import { useState } from 'react';
import { AuthorizationStatus } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { postFavoriteOfferAction } from '../store/api-actions';

type FavoriteButtonProps = {
  baseClass: string;
  id: string;
  isFavorite: boolean;
  children: JSX.Element;
};

function FavoriteButton(props: FavoriteButtonProps): JSX.Element {
  const { id, baseClass, children } = props;
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  const onFavoriteButtonClick = () => {
    const newIsFavorite = !isFavorite;

    dispatch(
      postFavoriteOfferAction({
        id,
        isFavorite: newIsFavorite,
      })
    );
    setIsFavorite(newIsFavorite);
  };

  return (
    <button
      className={classNames(`${baseClass}__bookmark-button`, 'button', {
        [`${baseClass}__bookmark-button--active`]: isFavorite,
      })}
      type="button"
      onClick={isAuth ? () => onFavoriteButtonClick() : undefined}
    >
      {children}
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}
export default FavoriteButton;
