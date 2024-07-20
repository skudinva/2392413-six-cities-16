import { CityEntity, OfferEntity } from './types';

export const getRatingPercent = (rating: number): number =>
  Math.round(rating * 20);

export const getCityOffers = (offers: OfferEntity[], city: CityEntity) =>
  offers.filter((offer) => city.name && offer.city.name === city.name);
