import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import app from "./Base.js";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import API from "./utils/API";
function App() {
  const [currentUser, setCurrentUser] = useState();
  const [name, setName] = useState();
  const [initial, setInitial] = useState();
  const [email, setEmail] = useState();
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        API.getUserInfo(user.uid).then(({ data }) => {
          if (data) {
            let Initial = data.name
              .split(" ")
              .map((elem) => elem[0].toUpperCase());
            setInitial(Initial.join(""));
            setName(data.name);
            setEmail(data.email);
            console.log("from APP ", Initial.join(""));
          } else {
            setInitial("NA");
            setName("NA");
          }
        });
      }
    });
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar Name={name} Initial={initial} Email={email} />
          <Switch>
            <Route exact path="/" component={Landing} />
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/checkout" component={Checkout} />
            <PrivateRoute exact path="/projects" component={Projects} />
            <PrivateRoute component={Home} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
