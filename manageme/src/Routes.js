import React from 'react';
import {Router, Route, Switch} from 'react-dom';
import './index';
import Login from './Pages/Dashboard/login/Login';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard'
import Support from './Pages/Dashboard/Support/Support';

const Routes = () =>{
  return(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path = "/" exact>
          <Login/>
        </Route>
        <Route path = "/admin">
          <Dashboard/>
        </Route>
        <Route path = "/help">
          <Support/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
  );
}

export default Routes


