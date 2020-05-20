import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasToken: true,
      isLoading: true,
    }
  }

  async componentDidMount() {
    const token = localStorage.getItem("jwt")
    if (token != null) {
      this.setState({
        hasToken: true,
      })
    }
    this.setState({
      isLoading: false,
    })
  }

  clearJWT() {
    localStorage.removeItem("jwt")
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }

    return (
      <nav className="navbar is-black" role="navigation" aria-label="main" >
        <div className="navbar-brand">
          <Link to="/papers" className="navbar-item is-size-4">
            refMag
          </Link>
        </div>
        <div className="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <Link to="/login" class="button is-light" onClick={() => { this.clearJWT() }}>
                Log out
              </Link>
            </div>
          </div>
        </div>
      </nav >
    )
  }
}

export default NavBar;
