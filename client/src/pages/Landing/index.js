import React, { useContext, useEffect } from "react";
import { withRouter, Redirect } from "react-router";
import "./style.css";
import logo from "./images/logo.png";
import projects from "./images/projects.png";
import message from "./images/message.png";
import kanban from "./images/doneKanban.gif";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Carousel from "react-bootstrap/Carousel";
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";
import { AuthContext } from "../../Auth.js";
import "./style.css";

const Landing = ({ history }) => {
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    document.body.style.backgroundColor = "#4bb3fd";
  }, []);
  if (currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <div className="jumbotron " id="tron">
        <h1 className="display-2 text-center">
          Whatever it is... Get. It.{" "}
          <img style={{ width: 300, height: 300 }} src={logo} alt="Done." />
        </h1>
      </div>
      <div>
        <div className="row">
          <div className=" offset-1 col-lg-5">
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src={projects} alt="First slide" />
                <Carousel.Caption style={{ color: "black" }}>
                  <h3 classname="slide">Manage Multiple Projects</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={message} alt="Second slide" />

                <Carousel.Caption style={{ color: "black" }}>
                  <h3>Communicate with your team</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={kanban} alt="Third slide" />

                <Carousel.Caption style={{ color: "black" }}> 
                  <h3>Access to responsive kanban</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="offset-1 col-lg-4">
            <Tabs defaultActiveKey="home">
              <Tab eventKey="home" title="Log In" id="tab1">
                <div className="card crd  shadow-lg ">
                  <div className="card-body cbody">
                    <h3 className="cardHead text-center">
                      log in to manage projects
                    </h3>
                    <Login />
                  </div>
                </div>
              </Tab>
              <Tab eventKey="profile" title="Sign Up" id="tab2">
                <div className="card shadow-lg crd ">
                  <div className="card-body cbody">
                    <h3 className="cardHead text-center">create an account</h3>
                    <SignUp />
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Landing);
