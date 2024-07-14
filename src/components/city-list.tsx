import { Link } from 'react-router-dom';
import { cities } from '../const';
type CityListProps = {
  currentCity: string;
  onCityClick: (cityName: string) => void;
};

function CityList(props: CityListProps): JSX.Element {
  const { currentCity, onCityClick } = props;
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
      {cities.map((city, index) => {
        const keyValue = `${city}-${index}`;
        const classes = [
          'locations__item-link',
          'tabs__item',
          city === currentCity ? 'tabs__item--active' : '',
        ].join(' ');
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
//tabs__item--active

export default CityList;
