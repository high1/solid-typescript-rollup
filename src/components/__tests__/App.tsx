import { render, MountableElement } from 'solid-js/dom';
import { screen } from '@testing-library/dom';

import App from '../App';

test('link and image should exist', () => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  render(() => <App />, container as MountableElement);
  expect(screen.queryByRole('link')).toHaveTextContent('Learn Solid');
  expect(container).toContainElement(screen.queryByRole('img', { name: /logo/i }));
});
