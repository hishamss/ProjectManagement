import React, { Component, useState } from 'react';
import "./index.css";
import CreateProject from '../Create_Project';

class Projects extends Component {
  state = {
    projects: [],
    show: false
  }

  //this is for closing the modal
  handleClose = () => this.setState({ show: false });
  //this is for showing the modal
  handleShow = () => this.setState({ show: true });

  componentDidMount() {
    const { uid } = this.props.currentUser;
    
    fetch(`/api/users/${uid}`)
      .then(res => res.json())
      .then(data => {
        console.log("data =======> ", data);
        console.log("this is the ID =======>", uid )
        console.log("data =======> ", data.projects);
        const { projects } = data;
        this.setState({ projects });
      })
  }

  render() {
    const { projects, show } = this.state;
    const { uid } = this.props.currentUser;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card" onClick={this.handleShow}>Create New Project+</div>
          </div>
        </div>
        <div className="row">
          {projects.map((p, i) => {
            const { projectTitle } = p;
            return (
              <div className="column col-6" key={i}>
                <div className="card">{projectTitle}</div>
              </div>
            )
          })}
        </div>
        <div>
          <button>Upgrade to Full</button>
        </div>
        <CreateProject show={show} handleClose={this.handleClose} uid={uid} />
      </div>
    )
  }



}


export default Projects;
