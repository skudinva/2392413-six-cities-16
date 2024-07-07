import { AuthorizationStatus } from './const';

export type AppProps = {
  offersCount: number;
};

export type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};
