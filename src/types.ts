import { AuthorizationStatus } from './const';

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
