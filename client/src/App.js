import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";


function App() {
  return (
    <AuthProvider>
    <Router>
      <div>
        <Navbar />
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
