import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import reducer from './reducers/google-book-search-reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>, document.getElementById('root')
);

serviceWorker.unregister();
