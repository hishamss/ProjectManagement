import React, { useEffect, useState } from "react";
import "./index.css";
import CreateProject from '../Create_Project';

function Home({ currentUser, LocalId }) {
  state = {
    projects: [],
    show: false
  }
  const [projects, useProjects] = useState({})
  //this is for closing the modal
  handleClose = () => this.setState({ show: false });
  //this is for showing the modal
  handleShow = () => this.setState({ show: true });

  useEffect(() => {
    document.body.style.backgroundColor = "#f4f4f9";
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">Create New Project+</div>
        </div>
      </div>
    </div>
  );
}
export default Home;
