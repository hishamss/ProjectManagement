import React, { useEffect } from "react";
import "./style.css";
function Home({ currentUser, LocalId }) {
  useEffect(() => {
    document.body.style.backgroundColor = "#f4f4f9";
  }, []);
  return (
    <div className="projectsContainer">
      <div className="row">
        <div className="col">
          <div className="card">Create Project +</div>
        </div>
        <div className="col">
          <div className="card">Create Project</div>
        </div>
        <div className="w-100"></div>
        <br />
        <div className="col">
          <div className="card">Create Project</div>
        </div>
        <div className="col">
          <div className="card">Create Project</div>
        </div>
      </div>
    </div>
  );
}
export default Home;
