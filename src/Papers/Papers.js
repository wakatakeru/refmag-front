import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios';
import NewPaper from './NewPaper'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '0%',
    bottom: 'auto',
    marginRight: '-30%',
    overflow: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '0px'
  }
}

class Papers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      papers: null
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  async updatePapers() {
    const papers_url = process.env.REACT_APP_INDEX_API_URL
    const headers = {
      headers: {
        'Authorization': localStorage.getItem('jwt')
      },
      data: {}
    }
    let papers;

    try {
      papers = (await axios.get(`${papers_url}/papers`, headers)).data.reverse()
    } catch (err) {
      papers = []
    }

    this.setState({
      papers
    });
  }

  componentDidMount() {
    this.updatePapers();
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.isModalOpen !== prevState.isModalOpen) {
      this.updatePapers();
    }
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.isModalOpen}
          style={customStyles}
        >
          <NewPaper closeModal={() => { this.closeModal(); }} />
          <button
            onClick={this.closeModal}
            className="button is-dark is-large is-fullwidth"
          >
            Close
                </button>
        </Modal>
        <div className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Welcome</h1>
              <h2 className="subtitle"><strong>refMag</strong>: Reference Manager</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="column">
              <button
                onClick={this.openModal}
                className="button is-primary is-rounded is-large is-fullwidth"
              >
                + Add New Paper
              </button>
            </div>
          </div>
          <div className="row">
            {this.state.papers === null && <p>Loading</p>}
            {
              this.state.papers && this.state.papers.map(paper => (
                <div className="column">
                  <div className="box">
                    <Link to={`/papers/${paper.id}`} className="title is-4">
                      {paper.title}
                    </Link>
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
