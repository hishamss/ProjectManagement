import React, { useContext } from "react";
import { withRouter, Redirect } from "react-router";
import "./style.css";
import logo from "./logo.png";
import ex from "./ex.jpg";
import ex2 from "./ex2.png";
import ex3 from "./ex3.png";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";
import { AuthContext } from "../../Auth.js";

const Landing = ({ history }) => {
  const { currentUser } = useContext(AuthContext);

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
                <img className="d-block w-100" src={ex} alt="First slide" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={ex2} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={ex3} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
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
