import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./style.css";
function Navbar() {
  // render navbar for all pages except the landing page
  if (useLocation().pathname !== "/") {
    return (
      <nav className="navbar navbar-expand-lg">
        {/* <Link className="navbar-brand" to="/">
                Google Books
              </Link> */}
        <Link className="navbar-brand" to="/home">
          <img id="logo" src="Done.png" alt="logo" loading="lazy" />
        </Link>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li>
              <button type="button" class="btn btn-success">
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
                >
                  Change Password
                </Link>
              </div>
            </li>

            {/* <li className="nav-item">
                    <Link
                      style={{ marginRight: "20px" }}
                      to="/"
                      className={
                        useLocation().pathname === "/" ? "nav-link clicked" : "nav-link"
                      }
                    >
                      Search
                    </Link>
                  </li>
                  <li className="nav-item"> */}
            {/* <Link
                      to="/saved"
                      className={
                        useLocation().pathname === "/saved"
                          ? "nav-link clicked"
                          : "nav-link"
                      }
                    >
                      Saved
                    </Link>
                  </li> */}
          </ul>
        </div>
      </nav>
    );
  }
  return null;
}

export default Navbar;
