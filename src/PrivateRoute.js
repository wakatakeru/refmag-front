// Fix

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuthenticated: false,
      isLoading: true,
    }
  }

  async componentDidMount() {
    const token = localStorage.getItem("jwt")
    if (token != null) {
      this.setState({
        isAuthenticated: true,
      })
    }

    this.setState({
      isLoading: false,
    })
  }

  render() {
    const { component: Component, ...rest } = this.props
    const { isAuthenticated, isLoading } = this.state

    if (isLoading) {
      return <div>
        <p>Token verification ...</p>
      </div>
    }

    return (
      <Route {...rest} render={() => {
        if (!isAuthenticated) {
          return <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
        }
        return <Component {...this.props} />
      }}
      />
    )
  }
}

export default PrivateRoute;
