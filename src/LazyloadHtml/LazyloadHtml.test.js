import { render, screen } from '@testing-library/react';
import LazyloadHtml from '.';

test('renders learn react link', () => {
  render(<LazyloadHtml />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
