import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../mock-component';
import { makeFakeState } from '../mocks';
import OfferReviewForm from './offer-review-form';

describe('Component: OfferReviewForm', () => {
  it('should render & correctly button disable|enable ', async () => {
    const state = makeFakeState();
    const { withStoreComponent } = withStore(<OfferReviewForm />, state);
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    const button = screen.getByTestId('reviewButtonElement');

    await userEvent.click(screen.getByTestId('rating5Element'));
    await userEvent.type(screen.getByTestId('reviewElement'), '12345');
    expect(button).toBeDisabled();

    await userEvent.type(
      screen.getByTestId('reviewElement'),
      Array.from({ length: 60 }).join('1')
    );
    expect(button).toBeEnabled();
  });
});
