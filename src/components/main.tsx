import { useState } from 'react';
import { CityName } from '../const';
import { useAppSelector } from '../hooks/use-app-dispatch';
import { OfferEntity } from '../types';
import { getCityOffers } from '../utils';
import CityList from './city-list';
import Map from './map';
import OfferSort from './offer-sort';
import PlaceCardList from './place-card-list';

function Main(): JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offers);
  const cityOffers = getCityOffers(offers, currentCity);
  const [currentOffer, setCurrentOffer] = useState<OfferEntity | null>(null);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CityList cities={CityName} currentCity={currentCity} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {currentCity
                ? `${cityOffers.length} places to stay in ${currentCity.name}`
                : ''}
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
      </div>
    </main>
  );
}

export default Main;
