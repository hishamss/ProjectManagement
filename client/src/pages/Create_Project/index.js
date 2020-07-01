import React, { Component, useState } from 'react';
import "./index.css";

class CreateProject extends Component {
    state = {
        projectData: {
            title: "",
            links: ""
        }
    }

    handleChange = e => {
        //Do not want to mutate react state directly,
        //so we use the javascript ... clone
        console.log("value", e.currentTarget.value)
        const projectData = { ...this.state.projectData };
        //Grabbing the input name and setting to the corresponding value on the projectData key
        projectData[e.currentTarget.name] = e.currentTarget.value;
        //Updating the state data with the input values
        this.setState({ projectData });
    }

    handleSubmit = e => {
        e.preventDefault();
        //Using the destructuring to avoid redundancy (projectTitle: this.state.projectData.title, projectLinks: this.state.projectData.links)
        const { title, links } = this.state.projectData;

        fetch("/api/projects", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                firebaseId: this.props.currentUser.uid,
                projectTitle: title,
                projectLinks: links
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log("data", data)
            })
            .catch(err => console.log("error occured", err))
    }

    render() {
        //This is using destructuring again simplifies code in the value
        const { title, links } = this.state.projectData;
        return (
            <div className="create">
                <h4>Project Management Site</h4>
                <h4 className=" mt-4">Create New Project</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-wrap">
                       {/* onChange tracks the input change */}
                        <label htmlFor="Title">Title:</label><input type="text" name="title" onChange={this.handleChange} value={title} />
                    </div>
                    <div className="form-wrap">
                        <label htmlFor="links">Links:</label><input type="text" name="links" onChange={this.handleChange} value={links} />
                    </div>
                    <div className="btn-wrap"><button>Create</button></div>
                </form>
            </div>
        );
    }
}

export default CreateProject;

