import { screen } from '@testing-library/dom';

test('renders without crashing', () => {
  const app = document.createElement('div');
  app.setAttribute('id', 'app');
  document.body.appendChild(app);
  require('main');
  const link = screen.getByRole('link');
  expect(link).toBeInTheDocument();
  expect(link).toHaveTextContent('Learn Solid');
});
