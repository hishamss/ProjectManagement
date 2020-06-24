import React from "react";


// handleSubmit = event => {
//     event.preventDefault()
// }


function Landing() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="card">
                        <div className="card-body">
                            <h3>Login to Manage Projects</h3>
                        <form>
                        <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                                    </div>
                                </div> 
               </div>
                            <div className="offset-2 col-lg-5">
                                <div className="card">
                                    <div className="card-body">
                                    <h3>Create Account</h3>
                        <form>
                        <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group">
                        <label for="exampleInputPassword1">Confirm</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
  </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default Landing