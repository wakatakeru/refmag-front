import React, { Component } from 'react';
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
      <div className="container">
        <div className="row is-4">
          {this.state.papers === null && <p>Loading</p>}
          {
            this.state.papers && this.state.papers.map(paper => (
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
    )
  }
}

export default Papers;
