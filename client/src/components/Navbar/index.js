import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./style.css";
function Navbar() {
  if (useLocation().pathname !== "/") {
    return (
      <nav className="navbar navbar-expand-lg">
        {/* <Link className="navbar-brand" to="/">
                Google Books
              </Link> */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
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
