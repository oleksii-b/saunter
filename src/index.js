import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import * as asyncInitialState from 'redux-async-initial-state';
import {composeWithDevTools} from 'redux-devtools-extension';
import 'promise-polyfill/src/polyfill';
import 'bootstrap/dist/css/bootstrap.css';

import config from './firebase.config';
import reducers from './reducers';
import watchSignIn from 'sagas/signIn';
import watchSignOut from 'sagas/signOut';
import App from './App';
import './styles/main.less';


firebase.initializeApp(config);

const loadStore = () => {
  return new Promise(resolve => {
    firebase.database().ref().once('value')
      .then((data) => (console.log(data.val()) || {
        ...data.val(),
        // user: JSON.parse(localStorage.getItem('user'))
      }))
      .then(resolve);
  });
};

const updateStore = (store) => {
  localStorage.setItem('auth', store.auth);
  firebase.database().ref().set({
    ...store,
    // user: null
  });
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(compose(
    applyMiddleware(asyncInitialState.middleware(loadStore)),
    applyMiddleware(sagaMiddleware)
  ))
);

sagaMiddleware.run(watchSignIn);
sagaMiddleware.run(watchSignOut);

// store.subscribe(() => updateStore(store.getState()));

ReactDOM.render(
  <Provider
    store={store}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
