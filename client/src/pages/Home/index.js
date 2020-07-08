import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Modal } from "react-bootstrap";
import "./style.css";
function Home({ currentUser, LocalId }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [projects, setProjects] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setMessage("");
    setShow(true);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#f4f4f9";
  }, []);

  const getProjects = () => {
    if (LocalId) {
      API.getProjects(LocalId).then(({ data }) =>
        console.log("projects for this user ", data)
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setTitle("");
    setLink("");
    if (title && link) {
      API.createProject({
        projectTitle: title,
        projectLink: link,
        UserId: LocalId,
      })
        .then((res) => {
          setMessage("Created");
        })
        .catch(() => setMessage("Error, Try again"));
    }
  };

  return (
    <div className="projectsContainer">
      <div className="row">
        <div className="col">
          {getProjects()}
          <div className="card projectsCard" onClick={handleShow}>
            Create Project +
          </div>
        </div>
        <div className="col">
          <div className="card projectsCard">Create Project</div>
        </div>
        <div className="w-100"></div>
        <br />
        <div className="col">
          <div className="card projectsCard">Create Project</div>
        </div>
        <div className="col">
          <div className="card projectsCard">Create Project</div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                value={title}
                name="title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                placeholder="Project Title"
              />
              <br />
              <input
                value={link}
                name="link"
                type="text"
                onChange={(e) => setLink(e.target.value)}
                className="form-control"
                placeholder="Project Link"
              />
            </div>
            <p style={{ marginTop: "1rem" }}>{message}</p>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ background: "#4bb3fd" }}
            >
              Add
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Home;
