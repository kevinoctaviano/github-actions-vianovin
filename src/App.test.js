import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name kevin octaviano', () => {
  render(<App />);
  const linkElement = screen.getByText(/kevin octaviano/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders counter redux', () => {
  render(<App />);
  const linkElement = screen.getByText(/counter redux/i);
  expect(linkElement).toBeInTheDocument();
});
