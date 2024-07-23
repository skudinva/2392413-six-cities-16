import { RatingGrade } from '../const';

type RatingProps = {
  rating: RatingGrade;
  selectedRating: number;
  onChangeRating: React.ChangeEventHandler<HTMLInputElement>;
};

function Rating(props: RatingProps): JSX.Element {
  const { title, mark } = props.rating;
  const { selectedRating, onChangeRating } = props;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={mark}
        id={`${mark}-stars`}
        type="radio"
        checked={mark === selectedRating}
        onChange={onChangeRating}
      />
      <label
        htmlFor={`${mark}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}
export default Rating;
