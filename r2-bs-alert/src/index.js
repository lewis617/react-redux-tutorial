import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import { reducer as alertsReducer, alertMessage } from './alert';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(
  combineReducers({ alerts: alertsReducer }),
  {},
  applyMiddleware(thunk)
);

store.dispatch(alertMessage('message from server', 'info'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
