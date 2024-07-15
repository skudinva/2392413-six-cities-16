import { useState } from 'react';
import { OfferEntity } from '../types';
import PlaceCard from './place-card';

type PlaceCardListProps = {
  offers: OfferEntity[];
  onActiveOfferChange: React.Dispatch<React.SetStateAction<OfferEntity | null>>;
};

function PlaceCardList(props: PlaceCardListProps): JSX.Element {
  const { offers, onActiveOfferChange } = props;
  const [activeOffer, setActiveOffer] = useState<OfferEntity | null>(null);
  onActiveOfferChange(activeOffer);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: OfferEntity) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          onActiveOfferChange={setActiveOffer}
          baseClass="cities"
        />
      ))}
    </div>
  );
}
export default PlaceCardList;
