import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import NavBar from './NavBar/NavBar';
import Login from './Login/Login';
import Papers from './Papers/Papers';
import Paper from './Papers/Paper';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path='/login' component={Login} />
          <PrivateRoute exact path='/papers' component={Papers} />
          <PrivateRoute path='/papers/:id' component={Paper} />
        </Switch>
      </div>
    );
  }
}

export default App;
