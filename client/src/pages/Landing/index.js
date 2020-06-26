import React from "react";
import "./style.css"
import logo from "./logo.png"


// handleSubmit = event => {
//     event.preventDefault()
// }


function Landing() {
    return (
        <div>
            <div className="jumbotron " id="tron">
            <h1 className="display-2 text-center">Whatever it is... Get. It. <img style={{width: 300, height: 300}} src={logo} alt="Done." /></h1>
            </div>
            <div >
            <div className="row">
                <div className="offset-1 col-lg-4">
                    <div className="card crd  shadow-lg ">
                        <div className="card-header  cardHead">
                        <h3 className="text-center text-white">Login to Manage Projects</h3>
                        </div>
                        <div className="card-body cbody  bg-secondary">  
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
               </div>
                            <div className="offset-2 col-lg-4">
                                <div className="card shadow-lg crd ">
                                <div className="card-header cardHead">
                        <h3 className="text-center text-white">Create Account</h3>
                        </div>
                        <div className="card-body cbody bg-secondary">        
                        <form>
                        <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email"  />
                        </div>
                        <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="signup-password" />
                        </div>
                        <div className="form-group">
                        <label for="exampleInputPassword1">Confirm</label>
                        <input type="password" className="form-control" id="confirm" />
                        </div>
                        <button type="submit" className="btn btns w-25 px-4" id="add-btn-free" style={{marginLeft: 100}}>Free</button>
                        <button type="submit" className="btn btns w-25 mx-5 px-4" id="add-btn-full">Full</button>
                        </form>
  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
    )
}

export default Landing