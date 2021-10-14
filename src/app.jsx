import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./routes/login";
import ForgotPassword from "./routes/forgot";
import Signup from "./routes/signup";
import Dashboard from "./routes/dashboard";
import Homepage from "./routes/landingpage";
import Profile from "./routes/profile";


const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/forgot" component={ForgotPassword}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/dash" component={Dashboard}></Route>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/profile" component={Profile}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
