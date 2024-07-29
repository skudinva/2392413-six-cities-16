import { render, screen } from '@testing-library/react';
import Loader from './loader';

describe('Component: Loader', () => {
  it('should render correct', () => {
    const expectText = /Loading.../i;
    render(<Loader />);
    expect(screen.getByText(expectText));
  });
});
