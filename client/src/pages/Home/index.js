import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Modal } from "react-bootstrap";
import "./style.css";
import Projects from "../Projects";
function Home({ currentUser, LocalId, Projects }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");

  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => {
    setMessage("");
    setShow(true);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#f4f4f9";
  }, []);

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
    <>
      <div
        style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}
      >
        <button className="btn btn-success" onClick={handleShow}>
          <span>
            <strong>+</strong>
          </span>{" "}
          Add Project
        </button>
      </div>

      <div className="projectsContainer">
        <div className="row">
          {Projects.map((row, index) => {
            return (
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 smallCol">
                <div className="card projectsCard">{row.projectTitle}</div>
              </div>
            );
          })}
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
    </>
  );
}
export default Home;
