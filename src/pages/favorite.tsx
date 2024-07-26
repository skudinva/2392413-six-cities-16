import classNames from 'classnames';
import FavoriteEmpty from '../components/favorite-empty';
import PlaceCard from '../components/place-card';
import { useAppSelector } from '../hooks/store';
import { OfferEntity } from '../types';

type OfferByGroup = {
  [city: string]: OfferEntity[];
};

function Favorite(): JSX.Element {
  const favoriteOffers = useAppSelector((state) => state.favoriteOffers);
  const favoriteOffersByGroup = Object.groupBy(
    favoriteOffers,
    (offer: OfferEntity) => offer.city.name
  ) as OfferByGroup;

  return (
    <main
      className={classNames('page__main', 'page__main--favorites', {
        'page__main--favorites-empty': !favoriteOffers.length,
      })}
    >
      <div className="page__favorites-container container">
        {favoriteOffers.length ? (
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(favoriteOffersByGroup).map((city) => (
                <li className="favorites__locations-items" key={`fav-${city}`}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoriteOffersByGroup[city].map((offer) => (
                      <PlaceCard
                        offer={offer}
                        key={offer.id}
                        baseClass="favorites"
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <FavoriteEmpty />
        )}
      </div>
    </main>
  );
}

export default Favorite;
