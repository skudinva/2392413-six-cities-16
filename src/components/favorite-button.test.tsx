import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthorizationStatus } from '../const';
import { OfferEntity, State } from '../types';
import { renderWithStoreAndHistoryComponent } from '../utils/mock-component';
import { makeFakeState, makeFakeStore } from '../utils/mocks';
import FavoriteButton from './favorite-button';

describe('Component: FavoriteButton', () => {
  let store: State;
  let testOffer: OfferEntity;

  beforeEach(() => {
    store = makeFakeStore(makeFakeState());
    store.USER.authorizationStatus = AuthorizationStatus.Auth;
    testOffer = store.DATA.offers[0];
  });

  it('should render correctly', () => {
    renderWithStoreAndHistoryComponent(
      <FavoriteButton
        baseClass="place-card"
        isFavorite={testOffer.isFavorite}
        id={testOffer.id}
      >
        <span>test</span>
      </FavoriteButton>,
      store
    );
    expect(screen.getByText('To bookmarks')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('on click should render correctly', async () => {
    renderWithStoreAndHistoryComponent(
      <FavoriteButton
        baseClass="place-card"
        isFavorite={testOffer.isFavorite}
        id={testOffer.id}
      >
        <span>test</span>
      </FavoriteButton>,
      store
    );

    const buttonElement = screen.getByRole('button');
    buttonElement.onclick = () => {
      testOffer.isFavorite = !testOffer.isFavorite;
    };

    await userEvent.click(buttonElement);

    renderWithStoreAndHistoryComponent(
      <FavoriteButton
        baseClass="place-card"
        isFavorite={testOffer.isFavorite}
        id={testOffer.id}
      >
        <span>test</span>
      </FavoriteButton>,
      store
    );
    expect(screen.getByText('In bookmarks')).toBeInTheDocument();
  });
});
