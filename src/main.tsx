import { render } from 'solid-js/dom';
import App from './components/App';
import './main.css';

const root = document.querySelector('#app');
if (root) {
  document.body.appendChild(root);
  render(() => <App />, root);
}

export const moduleHotAccept = (mod: NodeModule): void => {
  if (mod && mod.hot) {
    mod.hot.accept(() => window.location.reload());
  }
};

moduleHotAccept(module);
