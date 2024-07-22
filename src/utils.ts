import { SortType } from './const';
import { CityEntity, OfferEntity } from './types';

export const getRatingPercent = (rating: number): number =>
  Math.round(rating * 20);

export const getCityOffers = (offers: OfferEntity[], city: CityEntity) =>
  offers.filter((offer) => city.name && offer.city.name === city.name);

export const applySorting = {
  [SortType.popular]: null,
  [SortType.priceHigh2Low]: (
    nextOffer: OfferEntity,
    currentOffer: OfferEntity
  ) => currentOffer.price - nextOffer.price,
  [SortType.priceLow2High]: (
    nextOffer: OfferEntity,
    currentOffer: OfferEntity
  ) => nextOffer.price - currentOffer.price,

  [SortType.topRatedFirst]: (
    nextOffer: OfferEntity,
    currentOffer: OfferEntity
  ) => currentOffer.rating - nextOffer.rating,
};
