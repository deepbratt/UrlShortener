import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./screens/home";
import Redirect from "./screens/redirect";
const Routes = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:id" exact component={Redirect} />
        </Switch>
      </Router>
    </div>
  );
};
export default Routes;
