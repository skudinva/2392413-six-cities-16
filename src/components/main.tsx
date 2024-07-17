import { useState } from 'react';
import { Cities, CityName } from '../const';
import { AppProps, CityEntity, OfferEntity } from '../types';
import CityList from './city-list';
import Map from './map';
import OfferSort from './offer-sort';
import PlaceCardList from './place-card-list';

function Main({ offersCount, offers }: AppProps): JSX.Element {
  const [currentCity, setCurrentCity] = useState<CityEntity | null>(null);
  const [currentOffer, setCurrentOffer] = useState<OfferEntity | null>(null);

  const handleCityClick = (cityName: string): void => {
    Cities.some((city) => {
      if (city.name === cityName) {
        setCurrentCity(city);
      }
    });
  };

  const cityOffers = offers
    .filter((offer) => currentCity && offer.city.name === currentCity.name)
    .slice(0, offersCount);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CityList
            cities={CityName}
            currentCity={currentCity}
            onCityClick={handleCityClick}
          />
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
