import { OfferEntity } from '../types';
import Favorite from './favorite';

type FavoriteListProps = {
  offers: OfferEntity[];
};

type OfferByGroup = {
  [city: string]: OfferEntity[];
};

function FavoriteList(props: FavoriteListProps): JSX.Element {
  const favoriteOffers = props.offers.filter((offer) => offer.isFavorite);

  const favoriteOffersByGroup = Object.groupBy(
    favoriteOffers,
    (offer: OfferEntity) => offer.city.name
  ) as OfferByGroup;

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
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
                    <Favorite offer={offer} key={offer.id} />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoriteList;
