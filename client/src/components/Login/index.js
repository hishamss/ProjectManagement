import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../Base";
import { AuthContext } from "../../Auth.js";

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" name="password" />
                </div>
                <button type="submit" className="btn btns w-25 mx-5 px-4" id="login" >Login</button>
                <button type="submit" className="btn btns w-50">Forgot Password</button>
            </form>
        </div>
    );
};

export default withRouter(Login);