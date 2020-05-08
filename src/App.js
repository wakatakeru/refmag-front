import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Papers from './Papers/Papers';
import NewPaper from './Paper/NewPaper';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path='/papers' component={Papers} />
        <Route path='/new-paper' component={NewPaper} />
      </div >
    );
  }
}

export default App;
