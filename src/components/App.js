import React from 'react';
import PrivateRoute from '../auth/PrivateRoute';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import Dashboard from '../views/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/dashboard" component={Dashboard} /> */}
          {/* <PrivateRoute path="/profile" component={Profile} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
