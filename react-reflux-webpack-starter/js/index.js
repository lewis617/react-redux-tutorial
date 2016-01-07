import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Todo from './components/todo'
import 		'../style/index.scss'

ReactDOM.render(
  <App>
    <Todo/>
  </App>,
  document.getElementById('react-app')
)
