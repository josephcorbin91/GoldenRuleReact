import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './ReactEshop.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

const routes =
<Router history={browserHistory}>
  <Route path="/" component={App}>
   </Route>

</Router>;

ReactDOM.render(
  routes,
  document.getElementById('root')
);
