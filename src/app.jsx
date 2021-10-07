import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./routes/login";

const App = () => {
  return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login}></Route>
          </Switch>
        </Router>
      </div>
  );
};

export default App;
