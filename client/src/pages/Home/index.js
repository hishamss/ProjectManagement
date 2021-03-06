import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Modal } from "react-bootstrap";
import ProjectsComponent from "../kanban/main";
import "./style.css";
function Home({ currentUser, Name, LocalId, Projects, Type }) {
  const [show, setShow] = useState(false);
  const [showLimitation, setShowLimitation] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [isclicked, setIsclicked] = useState(false);
  const [clickedProject, setClickedProject] = useState("");
  const [ProjectTitle, setClickedProjectTitle] = useState("");
  const [privilege, setPrivilege] = useState(false);
  const [addedUsers, setAddedUsers] = useState([]);
  const [projectMessages, setProjectMessages] = useState([]);
  const [projectIssues, setProjectIssues] = useState([]);
  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };

  const handleCloseLimitation = () => {
    setShowLimitation(false);
  };
  const handleShow = () => {
    console.log("this user is ", Type);
    if (Type === "Free" && Projects.length >= 3) {
      setShowLimitation(true);
    } else {
      setMessage("");
      setShow(true);
    }
  };

  const renderProject = (Projectid, ProjectTitle, privilege) => {
    API.whoIsAdded(Projectid, LocalId).then(({ data }) => {
      API.getMessages(Projectid).then((response) => {
        API.getIssues(Projectid).then((issues) => {
          const icons = {
            open: "⭕️",
            "in progress": "🔆️",
            "in review": "📝",
            done: "✅",
          };
          const Issues = issues.data;
          setProjectIssues(
            Issues.map((item) => {
              const newItem = item;
              newItem.icon = icons[item.status];
              return newItem;
            })
          );

          const messages = response.data;
          setAddedUsers(data);
          setProjectMessages(messages);
          setClickedProject(Projectid);
          setClickedProjectTitle(ProjectTitle);
          setPrivilege(privilege);
          setIsclicked(true);
        });
      });
    });
  };

  const updateIsClicked = (val) => {
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
          Messages={projectMessages}
          ProjectIssues={projectIssues}
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
          <Modal show={showLimitation} onHide={handleCloseLimitation}>
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "black" }}>
                You've Reached the Limit
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ color: "black" }}>
              <p>You have reached the maximum number of projects!</p>
              <p>Please upgrade your account to get unlimited projects.</p>
            </Modal.Body>
          </Modal>
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
