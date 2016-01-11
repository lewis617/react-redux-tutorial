import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import inputApp from './reducers'

let store = createStore(inputApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);