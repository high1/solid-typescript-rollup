import { Component } from 'solid-js';
import logo from '../assets/logo.svg';
import wordmark from '../assets/wordmark.svg';
import './App.css';

const App: Component = () => {
  return (
    <div class="App">
      <header class="App-header">
        <img src={logo} class="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a class="App-link" href="https://solidjs.com" target="_blank" rel="noopener noreferrer">
          <img src={wordmark} class="App-wordmark" alt="wordmark" />
        </a>
      </header>
    </div>
  );
};

export default App;
