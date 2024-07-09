import { useState } from 'react';
import { Offer, PlaceCardListProps } from '../types';
import PlaceCard from './place-card';

function PlaceCardList(props: PlaceCardListProps): JSX.Element {
  const { offers } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activePlaceCard, setActivePlaceCard] = useState({} as Offer);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer) => (
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
