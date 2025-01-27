import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';

ReactDOM.render(
  <BrowserRouter basename="/spa-github-pages/">
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
