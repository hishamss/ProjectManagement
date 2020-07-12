import React, { useCallback, useState } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../Base";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const isInvalid = email === "";
  const [password, setPassword] = useState("");
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    console.log(email, password);
    try {
      await app
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log("logged in Successfully");
          if ({ history }) {
            history.push("/");
          } else {
            return <Redirect to="/home" />;
          }
        });
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/invalid-email":
          alert("Please enter a valid email address");
          break;
        case "auth/wrong-password":
          alert("Wrong Email/Password");
          break;
        case "auth/user-not-found":
          alert("Wrong Email/Password");
          break;
        default:
          alert("An unknown error occured");
          break;
      }
    }
  });

  //useCallback(
  //     async (event) => {
  //       event.preventDefault();

  //       const { password } = event.target.elements;
  //       try {
  //         await app
  //           .auth()
  //           .signInWithEmailAndPassword(email, password.value)
  //           .then(() => {
  //             if ({ history }) {
  //               history.push("/");
  //             } else {
  //               return <Redirect to="/home" />;
  //             }
  //           });
  //       } catch (error) {
  //         switch (error) {
  //           case "auth/invalid-email":
  //             alert("Please enter a valid email address");
  //             break;
  //           default:
  //             alert("An unknown error occured");
  //             break;
  //         }
  //       }
  //     },
  //     [history]
  //   );

  const forgotPw = useCallback(async (event) => {
    event.preventDefault();

    try {
      await app
        .auth()
        .sendPasswordResetEmail(email)
        .then(alert("A password reset email has been sent to " + email));
    } catch (error) {
      alert(error);
    }
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btnss w-25 mx-5 px-4" id="login">
          Login
        </button>
        <button
          type="push"
          className="btn btnss w-50"
          id="forgot"
          disabled={isInvalid}
          onClick={forgotPw}
        >
          Forgot Password
        </button>
      </form>
    </div>
  );
};

export default withRouter(Login);
