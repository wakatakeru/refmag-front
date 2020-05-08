import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Papers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      papers: null
    };
  }

  async componentDidMount() {
    const papers_url = process.env.REACT_APP_INDEX_API_URL
    const papers = (await axios.get(`${papers_url}/papers`)).data;
    this.setState({
      papers
    });
  }

  render() {
    return (
      <div>
        <div className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Welcom</h1>
              <h2 className="subtitle"><strong>refMag</strong>: Reference Manager</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="column">
              <Link to="/new-paper">
                <button className="button is-primary is-rounded  is-large is-fullwidth">
                  + Add Paper
              </button>
              </Link>
            </div>
          </div>
          <div className="row">
            {this.state.papers === null && <p>Loading</p>}
            {
              this.state.papers && this.state.papers.reverse().map(paper => (
                <div className="column">
                  <div className="box">
                    <h4 className="title is-4">{paper.title}</h4>
                    <p>
                      <small>{paper.doi}</small>
                    </p>
                    <hr />
                    <p>{paper.supplement}</p>

                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Papers;
