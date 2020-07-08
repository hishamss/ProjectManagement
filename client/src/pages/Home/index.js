import React, { useEffect } from "react";
import "./style.css";
function Home({ currentUser, LocalId }) {
  useEffect(() => {
    document.body.style.backgroundColor = "#f4f4f9";
  }, []);
  return (
    <div className="projectsContainer">
      <div class="card">Create Project</div>
    </div>
  );
}
export default Home;
