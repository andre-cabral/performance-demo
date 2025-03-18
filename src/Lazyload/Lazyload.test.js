import { render, screen } from '@testing-library/react';
import Lazyload from '.';

test('renders learn react link', () => {
  render(<Lazyload />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
