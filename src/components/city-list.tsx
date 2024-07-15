import { Link } from 'react-router-dom';
import { CityName } from '../const';
import { CityEntity } from '../types';
type CityListProps = {
  cities: typeof CityName;
  currentCity: CityEntity | null;
  onCityClick: (cityName: string) => void;
};

function CityList(props: CityListProps): JSX.Element {
  const { cities, currentCity, onCityClick } = props;

  return (
    <ul
      className="locations__list tabs__list"
      onClick={(evt) => {
        evt.preventDefault();
        const targetElement = evt.target as HTMLFormElement;
        if (targetElement.children.length === 0) {
          onCityClick(targetElement.innerText);
        }
      }}
    >
      {Object.values(cities).map((city, index) => {
        const classes = [
          'locations__item-link',
          'tabs__item',
          city.toString() === currentCity?.name ? 'tabs__item--active' : '',
        ].join(' ');
        const keyValue = `${index}-${city}`;

        return (
          <li className="locations__item" key={keyValue}>
            <Link className={classes} to="#">
              <span>{city}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default CityList;
