import { render, screen } from '@testing-library/react';
import { CityName } from '../const';
import { withHistory, withStore } from '../mock-component';
import { makeFakeState } from '../mocks';
import CityList from './city-list';

describe('Component: CityList', () => {
  it('should render correctly', () => {
    const state = makeFakeState();
    const { withStoreComponent } = withStore(
      <CityList cities={CityName} />,
      state
    );

    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    Object.values(CityName).map((city) => {
      expect(screen.getByText(city)).toBeInTheDocument();
    });
  });
});
