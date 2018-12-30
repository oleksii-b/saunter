import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import * as asyncInitialState from 'redux-async-initial-state';
import 'promise-polyfill/src/polyfill';
import 'bootstrap/dist/css/bootstrap.css';

import config from './firebase.config';
import reducers from './reducers';
import App from './App';
import './styles/main.less';


firebase.initializeApp(config);

const loadStore = () => {
  return new Promise(resolve => {
    firebase.database().ref().once('value')
      .then((data) => ({
        ...data.val(),
        auth: JSON.parse(localStorage.getItem('auth'))
      }))
      .then(resolve);
  });
};

const store = createStore(
  reducers,
  compose(applyMiddleware(asyncInitialState.middleware(loadStore)))
);

const updateStore = (store) => {
  localStorage.setItem('auth', store.auth);
  firebase.database().ref().set({
    ...store,
    auth: false
  });
}

store.subscribe(() => updateStore(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
