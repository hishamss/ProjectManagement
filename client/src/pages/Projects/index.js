import React, { useState } from "react";
import API from "../../utils/API";
import { Modal } from "react-bootstrap";
function Projects() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setMessage("");
    setShow(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    API.sendEmail(email)
      .then(() => {
        setMessage("Sent");
      })
      .catch(() => {
        setMessage("Error, try again!");
      });
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  return (
    <div>
      <button className="btn btn-success" onClick={handleShow}>
        Add User
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Enter the email address of the user you would like to add
              </label>
              <input
                name="email"
                type="email"
                onChange={handleInputChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <p>{message}</p>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default Projects;
