import React, { Component, useState } from 'react';
import "./index.css";

class Projects extends Component {
  state = {
    projectData: {
      title: ""
    }

  }

  fetchFunction = () => {
    fetch("/api/projects" + this.props.currentUser.uid, {
      method: "GET",
      headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify({
      projectTitle: title
    })
    })
  }

  render() {
    return (<div className="container">
      <div className="row">
        <div className="column">
          <div className="card">Create New Project+</div>
        </div>
        <div className="column">
          <div className="card">{title}</div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">Project B</div>
        </div>
        <div className="column">
          <div className="card">Project C</div>
        </div>
      </div>
      <div>
        <button>Upgrade to Full</button>
      </div>
    </div>
    )
  }



}


export default Projects;
