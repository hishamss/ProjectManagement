import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Modal } from "react-bootstrap";
import ProjectsComponent from "../kanban/main";
import "./style.css";
function Home({ currentUser, Name, LocalId, Projects }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [isclicked, setIsclicked] = useState(false);
  const [clickedProject, setClickedProject] = useState("");
  const [ProjectTitle, setClickedProjectTitle] = useState("");
  const [privilege, setPrivilege] = useState(false);
  const [addedUsers, setAddedUsers] = useState([]);
  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => {
    setMessage("");
    setShow(true);
  };

  const renderProject = (Projectid, ProjectTitle, privilege) => {
    console.log("clicked ", Projectid);
    API.whoIsAdded(Projectid, LocalId).then(({ data }) => {
      setAddedUsers(data);
      setClickedProject(Projectid);
      setClickedProjectTitle(ProjectTitle);
      setPrivilege(privilege);
      setIsclicked(true);
    });
  };

  const updateIsClicked = (val) => {
    console.log("from the other one", val);
    setIsclicked(val);
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
  {
    if (isclicked) {
      return (
        <ProjectsComponent
          id={clickedProject}
          title={ProjectTitle}
          isclicked={(val) => updateIsClicked(val)}
          LocalId={LocalId}
          Name={Name}
          PM={privilege}
          Users={addedUsers}
        ></ProjectsComponent>
      );
    } else {
      return (
        <React.Fragment>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "20px",
            }}
          >
            <button className="btn btn-success" onClick={handleShow}>
              <span>
                <strong>+</strong>
              </span>{" "}
              Add Project
            </button>
          </div>

          <div className="projectsContainer">
            <div className="row" style={{ minWidth: "500px" }}>
              {Projects.map((row, index) => {
                return (
                  <div
                    key={index}
                    className="col-lg-6 col-md-6 col-sm-6 col-xs-12 smallCol"
                  >
                    {/* <Link style={{ textDecoration: "none" }} to="/projects">
                  <div className="card projectsCard">{row.projectTitle}</div>
                </Link>
              </div> */}

                    <div
                      className="card projectsCard"
                      onClick={() =>
                        renderProject(
                          row.Project.id,
                          row.Project.projectTitle,
                          row.UserId === row.Project.UserId ? true : false
                        )
                      }
                    >
                      {row.Project.projectTitle}
                    </div>
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
        </React.Fragment>
      );
    }
  }
}
export default Home;
