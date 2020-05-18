import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Login from './Login/Login';
import Papers from './Papers/Papers';
import Paper from './Papers/Paper';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route path='/login' component={Login} />
        <Route exact path='/papers' component={Papers} />
        <Route path='/papers/:id' component={Paper} />
      </div >
    );
  }
}

export default App;
