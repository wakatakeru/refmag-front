import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      disabled: false,
    };
  }

  updateUserName(value) {
    this.setState({
      userName: value
    })
  }

  updatePassword(value) {
    this.setState({
      password: value
    })
  }

  async submit() {
    const user_auth_url = process.env.REACT_APP_USER_AUTH_JWT_API
    const payload = {
      name: this.state.userName,
      password: this.state.password
    }

    let res;
    let token;

    this.setState({
      disabled: true
    })

    try {
      res = await axios.post(`${user_auth_url}/login`, payload)
      if (res.status === 200) {
        token = res.data
        localStorage.setItem('jwt', token)
        this.props.history.push('/papers');
      }
    } catch {
      this.setState({
        disabled: false
      })
    }
  }

  render() {
    return (
      <div>
        <div className="hero is-light is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">refMag: Login</h1>
              <h2 className="subtitle">Reference Management System</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="message">
                <div className="message-header">
                  Login
                </div>
                <div className="message-body">
                  <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                      <input
                        disabled={this.state.disabled}
                        type="text"
                        onBlur={(e) => { this.updateUserName(e.target.value) }}
                        className="input"
                        placeholder="ex. wakatakeru"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input
                        disabled={this.state.disabled}
                        type="password"
                        onBlur={(e) => { this.updatePassword(e.target.value) }}
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button
                      disabled={this.state.disabled}
                      className="button is-link is-fullwidth is-large"
                      onClick={() => { this.submit() }}>
                      Login
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
