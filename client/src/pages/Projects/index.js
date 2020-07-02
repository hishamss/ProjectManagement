import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Modal } from "react-bootstrap";
import "./style.css";
function Projects({ currentUser }) {
  useEffect(() => {
    document.body.style.backgroundColor = "#f4f4f9";
  }, []);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setMessage("");
    setShow(true);
  };
  const handleSubmit = (event) => {
    setMessage("");
    event.preventDefault();
    if (email) {
      setLoading(true);

      API.sendEmail(email)
        .then(() => {
          setLoading(false);
          setMessage("Sent");
          setEmail("");
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
    setEmail(value);
  };

  return (
    <div>
      <p> Projects Page, Coming Soon....., {currentUser.uid}</p>
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
              <label>Add your team</label>
              <input
                value={email}
                name="email"
                type="email"
                onChange={handleInputChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email address for user"
              />
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
