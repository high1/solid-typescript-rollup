import { render } from 'solid-js/web';
import App from 'components/App';
import 'main.css';

const root = document.querySelector('#app');
if (root) render(() => <App />, root);

export const moduleHotAccept = (module_: NodeModule): void =>
  module_?.hot?.accept(() => window.location.reload());

// eslint-disable-next-line unicorn/prefer-module
moduleHotAccept(module);
