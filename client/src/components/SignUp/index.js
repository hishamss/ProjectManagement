import React, { useCallback, useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router";
import axios from "axios";
import app from "../../Base";

const SignUp = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [firebaseId, setfirebaseId] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [type, setType] = useState();
  const [post, setPost] = useState("redux");
  const isInvalid = password !== passConfirm || password === "";

  useEffect(() => {
    const postUser = async () => {
      axios
        .post("/api/users", post)
        .then(() => console.log("User Added Successfully to DB"));
    };
    if (post !== "redux") {
      postUser();
    }
  }, [post]);

  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();

      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((cred) => {
            if (!cred) {
              return;
            }

            history.push("/");

            setfirebaseId(cred.user.uid);

            const user = {
              name: name,
              email: email,
              firebaseId: cred.user.uid,
              type: type,
            };

            setPost(user);
            alert("Account creation successful");
          });
      } catch (error) {
        alert(error);
      }
    },
    [history, email, password, firebaseId, name, type]
  );

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassConfirm(e.target.value)}
          />
        </div>
        <button
          value="Free"
          type="submit"
          className="btn btns w-25 px-4"
          id="add-btn-free"
          style={{ marginLeft: 100 }}
          disabled={isInvalid}
          onClick={(e) => setType(e.target.value)}
        >
          Free
        </button>
        <button
          value="Full"
          type="submit"
          className="btn btns w-25 mx-5 px-4"
          id="add-btn-full"
          disabled={isInvalid}
          onClick={(e) => setType(e.target.value)}
        >
          Full
        </button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
