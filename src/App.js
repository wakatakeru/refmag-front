import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Papers from './Papers/Papers';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path='/papers' component={Papers} />
      </div >
    );
  }
}

export default App;
