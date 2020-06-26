import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./style.css";
function Navbar() {
  // render navbar for all pages except the landing page
  if (useLocation().pathname !== "/") {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/home">
            <img id="logo" src="Done.png" alt="logo" loading="lazy" />
          </Link>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li>
                <button type="button" className="btn btn-success">
                  Upgrade Now
                </button>
              </li>
              <li>
                <span className="fa-stack">
                  <span className="fas fa-circle fa-stack-2x"></span>

                  <strong className="fa-stack-1x">HS</strong>
                </span>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></a>
                <div
                  className="dropdown-menu"
                  id="UserDropMenu"
                  aria-labelledby="navbarDropdown"
                >
                  <span className="fa-stack">
                    <span className="fas fa-circle fa-stack-2x"></span>

                    <strong className="fa-stack-1x">HS</strong>
                  </span>
                  <Link id="profileDropDown" className="dropdown-item" to="#">
                    Hisham Saymeh
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link
                    className="dropdown-item"
                    style={{ paddingLeft: "0.5rem" }}
                    to="#"
                    id="changePasswordBtn"
                  >
                    Change Password
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="modal changePassModal" tabIndex="-1" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Change Password</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="emailAddress"
                    aria-describedby="emailHelp"
                    placeholder="Please enter the email address Associated with your account"
                  />
                </div>
                <p className="changeMsg"></p>
                <div>
                  <button
                    type="button"
                    className="btn btn-success submitChangePassBtn"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default Navbar;
