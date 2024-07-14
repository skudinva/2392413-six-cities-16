import { Link } from 'react-router-dom';
import { CityEntity } from '../types';
type CityListProps = {
  cities: CityEntity[];
  currentCity: CityEntity;
  onCityClick: (cityName: CityEntity) => void;
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
          const newCity = cities.find(
            (city) => city.name === targetElement.innerText
          );
          if (newCity === undefined) {
            return;
          }
          onCityClick(newCity);
        }
      }}
    >
      {cities.map((city) => {
        const classes = [
          'locations__item-link',
          'tabs__item',
          city === currentCity ? 'tabs__item--active' : '',
        ].join(' ');

        return (
          <li className="locations__item" key={city.name}>
            <Link className={classes} to="#">
              <span>{city.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
//tabs__item--active

export default CityList;
