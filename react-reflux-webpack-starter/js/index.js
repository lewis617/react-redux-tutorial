import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Todo from './components/todo'

ReactDOM.render(
  <App>
    <Todo/>
  </App>,
  document.getElementById('react-app')
)
