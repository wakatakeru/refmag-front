import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';

class Paper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paper: {},
    };
  }

  async componentDidMount() {
    const papers_url = process.env.REACT_APP_INDEX_API_URL
    const { match: { params } } = this.props;
    const headers = {
      headers: {
        'Authorization': localStorage.getItem('jwt')
      },
      data: {}
    }
    let paper;

    try {
      paper = (await axios.get(`${papers_url}/papers/${params.id}`, headers)).data
    } catch (err) {
      paper = []
    }

    this.setState({
      paper
    });
  }

  render() {
    return (
      <div>
        <div className="hero is-info is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{this.state.paper.title}</h1>
              <h2 className="subtitle"><strong>DOI: </strong>{this.state.paper.doi}</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.state.paper === null && <p>Loading</p>}
            <div className="column">
              <div className="box">
                <h2 className="title">Supplement</h2>
                <hr />
                <p>{this.state.paper.supplement}</p>
              </div>
              <Link to='/papers' className="button is-fullwidth is-large is-rounded is-dark">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Paper);
