import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Modal } from "react-bootstrap";
import "./style.css";
function Projects({ currentUser, LocalId }) {
  useEffect(() => {
    document.body.style.backgroundColor = "#f4f4f9";
  }, []);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [userToAdd, setUserToAdd] = useState();
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

      API.sendEmail(email, 2, userToAdd)
        .then(() => {
          setLoading(false);
          setMessage(`Invitation has been sent to ${email}`);
          setEmail("");
          API.addPendingUser(2, userToAdd).then(({ data }) => {
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

  const handleInputChange = (event) => {
    const { value } = event.target;
    const selectedIndex = event.target.options.selectedIndex;
    setUserToAdd(event.target.options[selectedIndex].getAttribute("data-key"));
    setEmail(value);
  };

  return (
    <div>
      <p>
        {" "}
        Projects Page, Coming Soon....., FirebaseID: {currentUser.uid}, LocalID:{" "}
        {LocalId}
      </p>
      <button className="btn btn-success" onClick={handleShow}>
        Add User
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              {/* <input
                value={email}
                name="email"
                type="email"
                onChange={handleInputChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email address for user"
              /> */}
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
  );
}
export default Projects;
