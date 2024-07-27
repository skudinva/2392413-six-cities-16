import { OfferEntity } from '../types';
import PlaceCard from './place-card';

type PlaceCardListProps = {
  offers: OfferEntity[];
  onActiveOfferChange: (offer: OfferEntity | null) => void;
};

function PlaceCardList(props: PlaceCardListProps): JSX.Element {
  const { offers, onActiveOfferChange } = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: OfferEntity) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          onActiveOfferChange={onActiveOfferChange}
          baseClass="cities"
        />
      ))}
    </div>
  );
}
export default PlaceCardList;
