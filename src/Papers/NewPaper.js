import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const propTypes = {
  closeModal: PropTypes.func,
}

class NewPaper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
      title: '',
      doi: '',
      supplement: '',
    }
  }

  closeModal() {
    return this.props.closeModal();
  }

  updateTitle(value) {
    this.setState({
      title: value
    });
  }

  updateDOI(value) {
    this.setState({
      doi: value
    })
  }

  updateSupplement(value) {
    this.setState({
      supplement: value
    })
  }

  async submit() {
    const paper_url = process.env.REACT_APP_INDEX_API_URL
    const payload = {
      title: this.state.title,
      doi: this.state.doi,
      supplement: this.state.supplement,
    };

    this.setState({
      disabled: true
    })

    try {
      await axios.post(`${paper_url}/papers`, payload);
      this.closeModal();
    } catch (err) {
      this.setState({
        disabled: false
      })
    }
  }

  render() {
    return (
      <div>
        <div className="hero is-warning is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Add New Paper</h1>
              <h2 className="subtitle">Enter the information for your new paper below</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="column">
              <div className="box">
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      disabled={this.state.disabled}
                      type="text"
                      onBlur={(e) => { this.updateTitle(e.target.value) }}
                      className="input"
                      placeholder="ex. A Symbolic Analysis of Relay and Switching Circuits"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">DOI</label>
                  <div className="control">
                    <input
                      disabled={this.state.disabled}
                      type="text"
                      onBlur={(e) => { this.updateDOI(e.target.value) }}
                      className="input"
                      placeholder="ex. 10.1109/EE.1938.6431064"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Supplement</label>
                  <div className="control">
                    <textarea
                      disabled={this.state.disabled}
                      type="text"
                      onBlur={(e) => { this.updateSupplement(e.target.value) }}
                      className="textarea"
                      placeholder="ex. This paper is a famous paper by Claude Shannon, which became the basis of information theory."
                    />
                  </div>
                </div>
                <div className="field">
                  <button
                    disabled={this.state.disabled}
                    className="button is-link is-fullwidth is-large"
                    onClick={() => { this.submit() }}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

NewPaper.propTypes = propTypes;
export default NewPaper;
