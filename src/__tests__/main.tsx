import { screen } from 'solid-testing-library';

test('renders without crashing', async () => {
  const app = document.createElement('div');
  app.setAttribute('id', 'app');
  document.body.append(app);
  await import('main');
  expect(screen.queryByRole('link')).toBeInTheDocument();
});
