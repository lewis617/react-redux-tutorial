/*eslint-disable*/
import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import * as containers from './containers'
/*eslint-enable*/

const {
  CounterPage
} = containers

export default (
  <Route component={App}>
    <Route path="/" component={CounterPage} />
  </Route>
)
