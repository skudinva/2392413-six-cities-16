import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../mock-component';
import { makeFakeState } from '../mocks';
import OfferReviewForm from './offer-review-form';

describe('Component: OfferReviewForm', () => {
  it('should render & correctly button disable|enable ', async () => {
    const state = makeFakeState();
    const ratingElement = 'rating5Element';
    const reviewElement = 'reviewElement';
    const incorrectReviewValue = '12345';
    const correctReviewValue = Array.from({ length: 60 }).join('1');

    const { withStoreComponent } = withStore(<OfferReviewForm />, state);
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    const button = screen.getByTestId('reviewButtonElement');

    await userEvent.click(screen.getByTestId(ratingElement));
    await userEvent.type(
      screen.getByTestId(reviewElement),
      incorrectReviewValue
    );
    expect(screen.getByDisplayValue(incorrectReviewValue)).toBeInTheDocument();
    expect(button).toBeDisabled();

    await userEvent.clear(screen.getByTestId(reviewElement));
    await userEvent.type(screen.getByTestId(reviewElement), correctReviewValue);
    expect(screen.getByDisplayValue(correctReviewValue)).toBeInTheDocument();
    expect(button).toBeEnabled();
  });
});
