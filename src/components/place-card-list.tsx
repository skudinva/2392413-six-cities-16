import { useState } from 'react';
import { OfferEntity } from '../types';
import PlaceCard from './place-card';

type PlaceCardListProps = {
  offers: OfferEntity[];
};

function PlaceCardList(props: PlaceCardListProps): JSX.Element {
  const { offers } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activePlaceCard, setActivePlaceCard] = useState({} as OfferEntity);
  // eslint-disable-next-line no-console
  console.log(activePlaceCard);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: OfferEntity) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          onActiveCardChange={setActivePlaceCard}
        />
      ))}
    </div>
  );
}
export default PlaceCardList;
