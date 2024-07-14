import { CityEntity, OfferEntity } from './types';

export const getRatingPercent = (rating: number): number =>
  Math.round(rating * 20);

export const getCities = (offers: OfferEntity[]): CityEntity[] => {
  const result: CityEntity[] = [];
  offers.forEach((offer) => {
    if (!result.find((city) => city.name === offer.city.name)) {
      result.push(offer.city);
    }
  });
  return result;
};
