import React from 'react';
import Router from 'react-router';
import {Route, DefaultRoute} from 'react-router';
import AppRoute from './router/approute.jsx';
import Tasks from './handlers/tasks.jsx';
import Task from './handlers/task.jsx';
import FontAwesome from './css/font-awesome.min.css';
import Normalize from './css/normalize.css';
import Index from './css/index.css';

let routes = (
    <Route handler={AppRoute}>
      <DefaultRoute name="tasks" handler={Tasks}/>
      <Route name="tasks/:type" handler={Tasks}/>
      <Route name="task/:id" handler={Task}/>
    </Route>
);

/**
 * render UIs
 */
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});