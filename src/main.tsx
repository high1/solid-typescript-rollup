import { render } from 'solid-js/dom';
import App from './components/App';
import './main.css';

const root = document.querySelector('#app');
if (root) {
  document.body.appendChild(root);
  render(() => <App />, root);
}

const hot = module?.hot;
if (hot) {
  hot.accept(() => window.location.reload());
}
