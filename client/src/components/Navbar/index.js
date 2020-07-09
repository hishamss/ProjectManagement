import React, { useCallback, useState } from "react";
import { Modal } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import app from "../../Base";
import "./style.css";
function Navbar({ Initial, Name, Email }) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const handleClose = () => setShow(false);

  const forgotPw = useCallback(async (event) => {
    event.preventDefault();
    if (Email) {
      try {
        await app
          .auth()
          .sendPasswordResetEmail(Email)
          .then(setMessage("Reset link has been sent to " + Email));
        setShow(true);
      } catch (error) {
        console.log("change Pass: ", error);
        setMessage(error);
      }
    } else {
      setMessage("please provide email address");
    }
  });
  // render navbar for all pages except the landing page
  const location = useLocation().pathname;
  if (location !== "/") {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/home">
            <img id="logo" src="Done.png" alt="logo" loading="lazy" />
          </Link>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link
                to="/home"
                className={
                  location === "/home"
                    ? "nav-link clicked"
                    : "nav-link pagesLinks"
                }
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li>
                <Link className="btn btn-success" to="/checkout" role="button">
                  Upgrade Now
                </Link>
              </li>
              <li>
                <span className="fa-stack">
                  <span className="fas fa-circle fa-stack-2x"></span>

                  <strong className="fa-stack-1x">{Initial}</strong>
                </span>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></Link>
                <div
                  className="dropdown-menu"
                  id="UserDropMenu"
                  aria-labelledby="navbarDropdown"
                >
                  <span className="fa-stack">
                    <span className="fas fa-circle fa-stack-2x"></span>

                    <strong className="fa-stack-1x">{Initial}</strong>
                  </span>
                  <Link id="profileDropDown" className="dropdown-item" to="#">
                    {Name}
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    className="dropdown-item"
                    style={{ paddingLeft: "0.5rem" }}
                    to="#"
                    id="changePasswordBtn"
                    onClick={forgotPw}
                  >
                    Change Password
                  </Link>
                  <Link
                    className="dropdown-item"
                    style={{ paddingLeft: "0.5rem" }}
                    to="#"
                    id="logoutBtn"
                    onClick={() => app.auth().signOut()}
                  >
                    Log Out
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Change Password</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{message}</p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
  return null;
}

export default Navbar;
