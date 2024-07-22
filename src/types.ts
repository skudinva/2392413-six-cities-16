import { store } from './store';
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

export type PrivateRouteProps = {
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

export type OfferDetailEntity = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityEntity;
  location: LocationEntity;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: [string];
  host: UserEntity;
  images: [string];
  maxAdults: number;
};

export type UserEntity = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type ReviewEntity = {
  id: string;
  date: string;
  user: UserEntity;
  comment: string;
  rating: number;
};

export type UserLoginStatus = UserEntity & {
  email: string;
  token: string;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
