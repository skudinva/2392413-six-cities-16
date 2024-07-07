import { AuthorizationStatus } from './const';

export type AppProps = {
  offersCount: number;
};

export type MainProps = {
  authorizationStatus: AuthorizationStatus;
};

export type PrivateRouteProps = MainProps & {
  children: JSX.Element;
};
