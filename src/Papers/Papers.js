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
        <p>Papers</p>
      </div>
    )
  }
}

export default Papers;
