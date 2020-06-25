import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
