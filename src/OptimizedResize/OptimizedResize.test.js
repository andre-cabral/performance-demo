import { render, screen } from '@testing-library/react';
import OptimizedResize from '.';

test('renders learn react link', () => {
  render(<OptimizedResize />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
