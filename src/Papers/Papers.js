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
    const papers = (await axios.get('http://localhost:8080/papers')).data;
    this.setState({
      papers
    });
  }

  render() {
    return (
      <div>
        {this.state.papers === null && <p>Loading</p>}
        {
          this.state.papers && this.state.papers.map(paper => (
            <div>
              <p>{paper.title}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Papers;
