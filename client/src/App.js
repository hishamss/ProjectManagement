import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/Checkout";
import Landing from "./components/Landing";

function App() {
  return(
  <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
