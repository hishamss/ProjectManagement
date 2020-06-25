import React, { Component } from "react";
// import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    Title: "",
    Description: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    // const newState = {};
    // newState[name] = value;
    // this.setState(newState);

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.Title} ${this.state.Description}`);
    this.setState({
        Title: "",
        Description: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.Title} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.Title}
            name="Title"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Title"
          />
          <input
            value={this.state.Description}
            name="Description"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Description"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;