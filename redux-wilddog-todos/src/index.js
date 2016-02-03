import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import createStore from './store'
import { getTodo,registerListeners} from './actions'

let store = createStore();

store.dispatch(getTodo())
store.dispatch(registerListeners())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);