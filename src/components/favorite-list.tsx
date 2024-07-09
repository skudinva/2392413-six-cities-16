import { FavoriteListProps } from '../types';
import Favorite from './favorite';

function FavoriteList(props: FavoriteListProps): JSX.Element {
  const favoriteOffers = props.offers.filter((offer) => offer.isFavorite);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {favoriteOffers.map((offer) => (
              <Favorite offer={offer} key={offer.id} />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoriteList;
