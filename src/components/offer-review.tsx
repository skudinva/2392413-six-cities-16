import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AuthorizationStatus } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/store';
import { fetchReviewAction } from '../store/api-actions';
import { getReviews } from '../store/offer-process/selectors';
import { getAuthorizationStatus } from '../store/user-process/selectors';
import OfferReviewForm from './offer-review-form';
import OfferReviewItem from './offer-review-item';

function OfferReview(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchReviewAction({ id }));
  }, [dispatch, id]);
  const reviews = useAppSelector(getReviews);

  const outputReviews = [...reviews]
    .sort(
      (nextReview, currentReview) =>
        Date.parse(currentReview.date) - Date.parse(nextReview.date)
    )
    .slice(0, 10);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {outputReviews.map((review) => (
          <OfferReviewItem review={review} key={review.id} />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <OfferReviewForm />}
    </section>
  );
}

export default OfferReview;
