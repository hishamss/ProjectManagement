import React from "react";
import "./style.css"
import logo from "./logo.png"
import ex from "./ex.jpg"
import ex2 from "./ex2.png"
import ex3 from "./ex3.png"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Carousel from 'react-bootstrap/Carousel'
import "./style.css";


function Landing() {

    return (
        <div>
            <div className="jumbotron " id="tron">
                <h1 className="display-2 text-center">Whatever it is... Get. It. <img style={{ width: 300, height: 300 }} src={logo} alt="Done." /></h1>
            </div>
            <div >
                <div className="row">
                    <div className=" offset-1 col-lg-5">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={ex}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={ex2}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={ex3}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="offset-1 col-lg-4">
                        <Tabs defaultActiveKey="profile" >
                            <Tab eventKey="home" title="Log In" id="tab1">
                                <div className="card crd  shadow-lg ">
                                   
                                    <div className="card-body cbody  bg-secondary">
                                        <h3 className="cardHead text-center">log in to manage projects</h3>
                                        <form>
                                            <div className="form-group">
                                                <label>Email address</label>
                                                <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword1">Password</label>
                                                <input type="password" className="form-control" id="loginPassword" />
                                            </div>
                                            <button type="submit" className="btn btns w-25 mx-5 px-4" id="login">Login</button>
                                            <button type="submit" className="btn btns w-50">Forgot Password</button>
                                        </form>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="Sign Up" id="tab2">
                                <div className="card shadow-lg crd ">
                                    
                                    <div className="card-body cbody bg-secondary">
                                    <h3 className="cardHead text-center">create an account</h3>
                                        <form>
                                        <div className="form-group">
                                                <label for="exampleInputEmail1">Name:</label>
                                                <input type="email" className="form-control" id="name" />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Email address</label>
                                                <input type="email" className="form-control" id="email" />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword1">Password</label>
                                                <input type="password" className="form-control" id="signup-password" />
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword1">Confirm</label>
                                                <input type="password" className="form-control" id="confirm" />
                                            </div>
                                            <button type="submit" className="btn btns w-25 px-4" id="add-btn-free" style={{ marginLeft: 100 }}>Free</button>
                                            <button type="submit" className="btn btns w-25 mx-5 px-4" id="add-btn-full">Full</button>
                                        </form>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Landing;
