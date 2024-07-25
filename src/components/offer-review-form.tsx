import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RatingTitle, Setting } from '../const';
import { useAppDispatch } from '../hooks/store';
import { PostReview, PostReviewAction } from '../store/api-actions';
import Rating from './rating';

function OfferReviewForm(): JSX.Element {
  const { id } = useParams();
  const [isRequestSending, setIsRequestSending] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const dispatch = useAppDispatch();

  const onFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (!id) {
      return;
    }
    const data: PostReview = {
      id,
      comment: review,
      rating: rating,
    };
    setIsRequestSending(true);
    dispatch(PostReviewAction(data)).then(() => {
      setRating(0);
      setReview('');
      setIsRequestSending(false);
    });
  };

  const isSubmitButtonDisabled =
    !rating ||
    review.length < Setting.review.minLength ||
    review.length > Setting.review.maxLength ||
    isRequestSending;
  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RatingTitle.map((ratingItem) => {
          const keyValue = `${ratingItem.mark}-rating`;
          return (
            <Rating
              rating={ratingItem}
              isDisabled={isRequestSending}
              key={keyValue}
              selectedRating={rating}
              onChangeRating={(evt) => {
                setRating(+evt.target.value);
              }}
            />
          );
        })}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        disabled={isRequestSending}
        onInput={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
          setReview(evt.target.value);
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitButtonDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default OfferReviewForm;
