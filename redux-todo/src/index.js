import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, compose} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index'

const reduxDevTools =
  (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

let store = createStore(
  reducer, reduxDevTools
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
