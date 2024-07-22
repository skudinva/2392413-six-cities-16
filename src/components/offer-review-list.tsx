import { ReviewEntity } from '../types';
import OfferReviewItem from './offer-review-item';

type OfferReviewListProps = {
  reviews: ReviewEntity[];
};
function OfferReviewList(props: OfferReviewListProps): JSX.Element {
  const { reviews } = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <OfferReviewItem review={review} key={review.id} />
      ))}
    </ul>
  );
}

export default OfferReviewList;
