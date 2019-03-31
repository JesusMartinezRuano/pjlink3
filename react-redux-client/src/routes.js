// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Proyectores from './containers/Proyectores';
import Proyector from './containers/Proyector';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Proyectores} />
     <Route path="/:id" component={Proyector} />
  </Route>
)
