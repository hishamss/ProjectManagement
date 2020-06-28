import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
function App() {
  console.log(process.env.REACT_APP_TEST_KEY);
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/projects" component={Projects} />
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
