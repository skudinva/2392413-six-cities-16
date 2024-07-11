import { AuthorizationStatus } from './const';
declare global {
  interface ObjectConstructor {
    groupBy<Item, Key extends PropertyKey>(
      items: Iterable<Item>,
      keySelector: (item: Item, index: number) => Key
    ): Record<Key, Item[]>;
  }

  interface MapConstructor {
    groupBy<Item, Key>(
      items: Iterable<Item>,
      keySelector: (item: Item, index: number) => Key
    ): Map<Key, Item[]>;
  }
}

export type AppProps = {
  offersCount: number;
  offers: Offer[];
};

export type MainProps = {
  authorizationStatus: AuthorizationStatus;
};

export type PrivateRouteProps = MainProps & {
  children: JSX.Element;
};

export type PlaceCardProps = {
  offer: Offer;
  key: string;
  onActiveCardChange: React.Dispatch<React.SetStateAction<Offer>>;
};

export type PlaceCardListProps = {
  offers: Offer[];
};

export type FavoriteListProps = {
  offers: Offer[];
};

export type FavoriteProps = {
  offer: Offer;
  key: string;
};

export type OfferProps = {
  offer: Offer;
};
export type OfferByGroup = {
  [city: string]: Offer[];
};

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};
