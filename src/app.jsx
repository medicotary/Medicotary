import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./routes/login";
import ForgotPassword from "./routes/forgot";
import Signup from "./routes/signup";
import Dashboard from "./routes/dashboard";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/forgot" component={ForgotPassword}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/dash" component={Dashboard}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
