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
  offers: OfferEntity[];
};

export type MainProps = {
  authorizationStatus: AuthorizationStatus;
};

export type PrivateRouteProps = MainProps & {
  children: JSX.Element;
};

export type LocationEntity = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type CityEntity = {
  name: string;
  location: LocationEntity;
};

export type OfferEntity = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityEntity;
  location: LocationEntity;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};
