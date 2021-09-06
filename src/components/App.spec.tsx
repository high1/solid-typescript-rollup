import { render, screen } from 'solid-testing-library';
import App from './App';

test('link and image should exist', () => {
  render(() => <App />);
  expect(screen.queryByRole('link')).toBeInTheDocument();
  expect(screen.queryByRole('img', { name: /logo/i })).toBeInTheDocument();
});
