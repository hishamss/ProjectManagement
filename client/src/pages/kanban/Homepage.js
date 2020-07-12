import React, { useState, useEffect } from "react";
import Item from "./item";
import API from "../../utils/API";
import { Modal } from "react-bootstrap";
import DropWrapper from "./DropWrapper";
import Col from "./col";
import { data, statuses } from "./data";
import styles from "./main.css";
import { AuthContext } from "../../Auth";

const Homepage = ({
  Name,
  LocalId,
  id,
  title,
  isclicked,
  PM,
  Users,
  Messages,
}) => {
  useEffect(() => {
    document.body.style.backgroundColor = "#f4f4f9";
  }, []);
  const [items, setItems] = useState(data);
  const ProjectID = id;
  const ProjectTitle = title;
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [userToAdd, setUserToAdd] = useState();
  const [userMessage, setUserMessage] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => {
    API.getUsersToAdd(LocalId).then(({ data }) => {
      setUsers(data.map((user) => `${user.email}-${user.name}-${user.id}`));
      setMessage("");
      setShow(true);
    });
  };

  const handleSubmit = (event) => {
    setMessage("");
    event.preventDefault();
    if (email) {
      setLoading(true);

      API.sendEmail(email, ProjectID, ProjectTitle, userToAdd, Name)
        .then(() => {
          setLoading(false);
          setMessage(`Invitation has been sent to ${email}`);
          setEmail("");
          API.addPendingUser(ProjectID, userToAdd).then(({ data }) => {
            if (data === "SequelizeUniqueConstraintError") {
              alert("this user has been added previously to this project!!");
            }
          });
        })
        .catch(() => {
          setLoading(false);
          setMessage("Error, try again!");
          setEmail("");
        });
    } else {
      setMessage("Please provide email !!");
    }
  };
  const deleteUser = (UserId, index) => {
    API.removeFromProject(UserId, ProjectID).then((res) => {
      if (res) {
        document.getElementById(index).style.display = "none";
      }
    });
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    const selectedIndex = event.target.options.selectedIndex;
    setUserToAdd(event.target.options[selectedIndex].getAttribute("data-key"));
    setEmail(value);
  };

  const postMessage = () => {
    const pTag = document.createElement("p");
    const pTag1 = document.createElement("p");
    const pTag2 = document.createElement("p");
    pTag2.classList.add("text-right");
    pTag2.style.color = "#2dd881";
    pTag.innerHTML = `<strong>${Name}</strong>:`;
    pTag1.innerHTML = userMessage;
    pTag2.innerHTML = "now";

    const data = {
      message: userMessage,
      projectId: ProjectID,
      userId: LocalId,
    };
    API.addMessage(data).then((res) => {
      if (res) {
        document.getElementsByClassName("messageArea")[0].appendChild(pTag);
        document.getElementsByClassName("messageArea")[0].appendChild(pTag1);
        document.getElementsByClassName("messageArea")[0].appendChild(pTag2);
        setUserMessage("");
      } else {
        setUserMessage("Error, try again");
      }
    });
  };

  const leaveProject = () => {
    API.leaveProject(ProjectID, LocalId).then(
      () => (window.location.href = "/")
    );
  };

  const DeleteProject = () => {
    API.deleteProject(ProjectID).then(() => {
      alert("Project has been deleted");
      window.location.href = "/";
    });
  };
  const onDrop = (item, monitor, status) => {
    const mapping = statuses.find((si) => si.status === status);

    //////////////////////
    setItems((prevState) => {
      const newItems = prevState
        .filter((i) => i.id !== item.id)
        .concat({ ...item, status, icon: mapping.icon });
      return [...newItems];
    });
  };

  const moveItem = (dragIndex, hoverIndex) => {
    const item = items[dragIndex];
    setItems((prevState) => {
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, item);
      return [...newItems];
    });
  };

  return (
    <React.Fragment>
      <div className="aboveKanban">
        <div className="projectControl">
          <p></p>
          <h1
            className="display-5"
            style={{ color: "black", fontWeight: "bold" }}
          >
            {ProjectTitle}
          </h1>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle projectControlMenu"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div
              className="dropdown-menu"
              id="ProjectDropMenu"
              aria-labelledby="dropdownMenuButton"
            >
              <a
                className="dropdown-item"
                href="#"
                style={PM ? { display: "inline-block" } : { display: "none" }}
                onClick={handleShow}
              >
                Add User
              </a>
              <a
                className="dropdown-item"
                href="#"
                style={PM ? { display: "inline-block" } : { display: "none" }}
                onClick={DeleteProject}
              >
                Delete Project
              </a>

              <a
                className="dropdown-item"
                href="#"
                style={!PM ? { display: "inline-block" } : { display: "none" }}
                onClick={leaveProject}
              >
                Leave Project
              </a>

              <a
                className="dropdown-item"
                href="#"
                onClick={() => isclicked(false)}
              >
                Back to Home
              </a>
            </div>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add User</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <label className="input-group-text">Select User</label>
                    </div>

                    <select
                      value={email}
                      className="custom-select"
                      onChange={handleInputChange}
                    >
                      <option value="">Add user by email</option>
                      {users.map((user) => {
                        let UserToAdd = user.split("-");
                        return (
                          <option
                            key={UserToAdd[2]}
                            data-key={UserToAdd[2]}
                            value={UserToAdd[0]}
                          >
                            {`${UserToAdd[0]}- ${UserToAdd[1]}`}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <img
                  style={{ width: "70px" }}
                  src="https://assets.materialup.com/uploads/163595e3-140e-4334-af76-cf7902795c51/preview.gif"
                  alt="loading"
                  className={loading ? "showLoading" : "hideLoading"}
                ></img>
                <p style={{ marginTop: "1rem" }}>{message}</p>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ background: "#4bb3fd", display: "block" }}
                >
                  Invite
                </button>
              </form>
            </Modal.Body>
          </Modal>
        </div>

        {/* <p>
          {" "}
          Projects Page, Coming Soon....., CurrentUser: {LocalId} clicked
          Project: {ProjectID}, project Title={ProjectTitle}, Name: {Name}
        </p> */}
        <div className="TeamAndMessages">
          <div>
            <div className="messages">
              <div className="messageArea">
                {Messages.map((message, index) => {
                  return (
                    <React.Fragment>
                      <p key={index}>
                        <strong>{message.User.name}:</strong>
                      </p>
                      <p>{message.message}</p>
                      <p className="text-right" style={{ color: "#2dd881" }}>
                        {" "}
                        now
                      </p>
                    </React.Fragment>
                  );
                })}

                {/* {Messages
                  ? console.log("yes", Messages)
                  : console.log("no", Messages)} */}
              </div>
              <hr />

              <div className="form-group">
                <textarea
                  value={userMessage}
                  className="form-control"
                  rows="3"
                  placeholder="Leave a message for your team"
                  id="leaveMessage"
                  onChange={(e) => setUserMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                className="btn btn-success"
                id="postMessage"
                onClick={postMessage}
              >
                Post
              </button>
            </div>
          </div>
          <div className="tableCont">
            <h4 className="text-center">
              <strong>Project Team</strong>
            </h4>
            <table
              className="table"
              style={{ color: "white", marginTop: "25px" }}
            >
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {Users.map((row, index) => {
                  return (
                    <tr key={index} id={index}>
                      <td className="userData">{row.User.name}</td>
                      <td className="userData">{row.status}</td>
                      <td className="userData">
                        <button
                          className="btn btn-success delUser"
                          style={
                            PM
                              ? { display: "inline-block" }
                              : { display: "none" }
                          }
                          onClick={() => deleteUser(row.UserId, index)}
                        >
                          Delete User
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div style={{ minWidth: "390px" }}></div>
        </div>
      </div>

      <div className={"row"}>
        {statuses.map((s) => {
          return (
            <div key={s.status} className={"col-wrapper"}>
              <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
              <DropWrapper
                onDrop={onDrop}
                status={s.status}
                setItems={setItems}
                items={items}
              >
                <Col>
                  {items
                    .filter((i) => i.status === s.status)
                    .map((i, idx) => (
                      <Item
                        key={i.id}
                        item={i}
                        index={idx}
                        moveItem={moveItem}
                        status={s}
                      />
                    ))}
                </Col>
              </DropWrapper>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Homepage;
