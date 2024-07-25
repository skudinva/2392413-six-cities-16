import classNames from 'classnames';
import { useState } from 'react';
import CityList from '../components/city-list';
import Map from '../components/map';
import NoPlaces from '../components/no-places';
import OfferSort from '../components/offer-sort';
import PlaceCardList from '../components/place-card-list';
import { CityName } from '../const';
import { useAppSelector } from '../hooks/store';
import {
  getCurrentCity,
  getCurrentCityOffers,
  getCurrentSort,
  getOffers,
} from '../store/offer-process/selectors';
import { OfferEntity } from '../types';
import { applySorting } from '../utils';

function Main(): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  const currentSort = useAppSelector(getCurrentSort);
  const cityOffers = useAppSelector(getCurrentCityOffers);
  const offers = useAppSelector(getOffers);
  const [currentOffer, setCurrentOffer] = useState<OfferEntity | null>(null);
  const sortFunction = applySorting[currentSort];
  if (sortFunction) {
    cityOffers.sort(sortFunction);
  }

  return (
    <main
      className={classNames('page__main', 'page__main--index', {
        'page__main--index-empty': !offers.length,
      })}
    >
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CityList cities={CityName} />
        </section>
      </div>
      <div className="cities">
        {cityOffers.length ? (
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {currentCity &&
                  `${cityOffers.length} ${
                    cityOffers.length > 1 ? 'places' : 'place'
                  } to stay in ${currentCity.name}`}
              </b>
              <OfferSort />
              <PlaceCardList
                offers={cityOffers}
                onActiveOfferChange={setCurrentOffer}
              />
            </section>
            <div className="cities__right-section">
              <Map
                offers={cityOffers}
                city={currentCity}
                currentOffer={currentOffer}
                baseClass="cities"
              />
            </div>
          </div>
        ) : (
          <NoPlaces />
        )}
      </div>
    </main>
  );
}

export default Main;
