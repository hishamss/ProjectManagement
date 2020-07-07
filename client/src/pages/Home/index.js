import React, { useEffect, useState } from "react";
import "./index.css";
import CreateProject from '../Create_Project';

function Home({ currentUser, LocalId }) {

  const [projects, useProjects] = useState([])
  const [show, setShow] = useState(false)

  //this is for closing the modal
  const handleClose = () => setShow(false);
  //this is for showing the modal
  const handleShow = () => setShow(true);

  useEffect(() => {
    document.body.style.backgroundColor = "#f4f4f9";
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card" onClick={handleShow}>Create New Project+</div>
        </div>
      </div>
      
      <CreateProject show={show} handleClose={handleClose} uid={LocalId} />
    </div>
    
  );
}
export default Home;
