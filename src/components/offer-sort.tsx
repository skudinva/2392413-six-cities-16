import { useState } from 'react';
import { SortList } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/use-app-dispatch';
import { setCurrentSort } from '../store/action';

function OfferSort(): JSX.Element {
  const [isSortListDropdown, setIsSortListDropdown] = useState(false);
  const dispatch = useAppDispatch();
  const currentSort = useAppSelector((state) => state.currentSort);

  const onSortChange = (
    evt: React.MouseEvent<HTMLUListElement, MouseEvent>
  ): void => {
    const targetElement = evt.target as HTMLFormElement;

    dispatch(setCurrentSort(targetElement.innerText));
    setIsSortListDropdown(false);
  };

  const onSortClick = () => {
    setIsSortListDropdown(!isSortListDropdown);
  };

  const additionClassName = isSortListDropdown ? 'places__options--opened' : '';

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onSortClick}>
        &nbsp;{currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${additionClassName}`}
        onClick={(evt) => onSortChange(evt)}
      >
        {Object.values(SortList).map((sort, index) => {
          const keyValue = `${index}-${sort}`;
          const activeClassName =
            currentSort === sort ? 'places__option--active' : '';
          return (
            <li
              key={keyValue}
              className={`places__option ${activeClassName}`}
              tabIndex={0}
            >
              {sort}
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default OfferSort;
