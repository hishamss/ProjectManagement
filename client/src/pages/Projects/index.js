import React, { useState } from "react";
import API from "../../utils/API";

function Projects() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    API.sendEmail(email);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Enter the email address of the user you would like to add</label>
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
    </form>
  );
}
export default Projects;
