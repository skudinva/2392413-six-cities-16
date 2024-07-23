import { Link } from 'react-router-dom';
import { AppRoute } from '../const';
import { useAppDispatch } from '../hooks/use-app-dispatch';
import { postFavoriteOfferAction } from '../store/api-actions';
import { OfferEntity } from '../types';
import RatingStars from './rating-stars';

type PlaceCardProps = {
  offer: OfferEntity;
  onActiveOfferChange?: React.Dispatch<
    React.SetStateAction<OfferEntity | null>
  >;
  baseClass: string;
};
function PlaceCard(props: PlaceCardProps): JSX.Element {
  const { offer, onActiveOfferChange, baseClass } = props;
  const dispatch = useAppDispatch();

  const onFavoriteButtonClick = () => {
    dispatch(
      postFavoriteOfferAction({
        id: offer.id,
        isFavorite: !offer.isFavorite,
      })
    );
  };

  return (
    <article
      className={`${baseClass}__card place-card`}
      onMouseEnter={() => onActiveOfferChange && onActiveOfferChange(offer)}
      onMouseLeave={() => onActiveOfferChange && onActiveOfferChange(null)}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${baseClass}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={'place-card__bookmark-button button'.concat(
              offer.isFavorite ? ' place-card__bookmark-button--active' : ''
            )}
            type="button"
            onClick={() => onFavoriteButtonClick()}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>
        <RatingStars baseClass="place-card" rating={offer.rating} />
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer.replace(':id', offer.id)}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
