import { render, screen } from '@testing-library/react';
import Priority from '.';

test('renders learn react link', () => {
  render(<Priority />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
