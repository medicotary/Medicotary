import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./routes/auth/login";
import ForgotPassword from "./routes/auth/forgot";
import Signup from "./routes/auth/signup";
import Dashboard from "./routes/dashboard";
import Billing from "./routes/billing";
import Delivery from "./routes/delivery";
import Product from "./routes/products";
import Vendor from "./routes/vendors";
import Homepage from "./routes/landingpage";
import Profile from "./routes/profile";
import Notifications from "./routes/notifications";
import Faq from "./routes/faqs";
import AddVendor from "./routes/addVendor";
import AddProduct from "./routes/addProduct";
import AddBill from "./routes/addBill";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/forgot" component={ForgotPassword}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/dash" component={Dashboard}></Route>
          <Route exact path="/products" component={Product}></Route>
          <Route exact path="/billing" component={Billing}></Route>
          <Route exact path="/vendors" component={Vendor}></Route>
          <Route exact path="/delivery" component={Delivery}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/notifications" component={Notifications}></Route>
          <Route exact path="/faqs" component={Faq}></Route>
          <Route exact path="/addvendor" component={AddVendor}></Route>
          <Route exact path="/addproduct" component={AddProduct}></Route>
          <Route exact path="/addbill" component={AddBill}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
