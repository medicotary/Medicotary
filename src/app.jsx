import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Loader from "./components/loader";
import { compose } from "redux";
import { isAuthenticated } from "./redux/selector/auth.Selector";
import { connect } from "react-redux";

const Login = lazy(() => import("./routes/auth/login"));
const ForgotPassword = lazy(() => import("./routes/auth/forgot"));
const Signup = lazy(() => import("./routes/auth/signup"));
const Dashboard = lazy(() => import("./routes/dashboard"));
const Billing = lazy(() => import("./routes/billing/billing"));
const Delivery = lazy(() => import("./routes/delivery/delivery"));
const Product = lazy(() => import("./routes/products/products"));
const Vendor = lazy(() => import("./routes/vendors/vendors"));
const Homepage = lazy(() => import("./routes/landingpage"));
const Profile = lazy(() => import("./routes/profile"));
const Notifications = lazy(() => import("./routes/notifications"));
const Faq = lazy(() => import("./routes/faqs"));
const AddVendor = lazy(() => import("./routes/vendors/addVendor"));
const EditVendor = lazy(() => import("./routes/vendors/editVendor"));
const AddProduct = lazy(() => import("./routes/products/addProduct"));
const EditProduct = lazy(() => import("./routes/products/editProduct"));
const AddBill = lazy(() => import("./routes/billing/addBill"));
const Invoice = lazy(() => import("./routes/billing/invoice"));
const CreateIntegration = lazy(() =>
  import("./routes/delivery/createintegration")
);
const Delhivery = lazy(() => import("./routes/delivery/delhivery"));

const Loading = () => <Loader color="primary" />;

function App(props) {
  let routes = (
    <Switch>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/forgot" component={ForgotPassword}></Route>
      <Route exact path="/signup" component={Signup}></Route>
      <Route exact path="/" component={Homepage}></Route>
      <Redirect to="/" />
    </Switch>
  );
  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route exact path="/products" component={Product}></Route>
        <Route exact path="/billing" component={Billing}></Route>
        <Route exact path="/vendors" component={Vendor}></Route>
        <Route exact path="/delivery" component={Delivery}></Route>
        <Route
          exact
          path="/createintegration"
          component={CreateIntegration}
        ></Route>
        <Route exact path="/dash" component={Dashboard}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/notifications" component={Notifications}></Route>
        <Route exact path="/faqs" component={Faq}></Route>
        <Route exact path="/addvendor" component={AddVendor}></Route>
        <Route exact path="/vendors/:id/update" component={EditVendor}></Route>
        <Route exact path="/addproduct" component={AddProduct}></Route>
        <Route
          exact
          path="/products/:id/update"
          component={EditProduct}
        ></Route>
        <Route exact path="/addbill" component={AddBill}></Route>
        <Route exact path="/billing/:id" component={Invoice}></Route>
        <Route exact path="/delhivery" component={Delhivery}></Route>
        <Redirect to="/dash" />
      </Switch>
    );
  }
  return (
    <div>
      <Suspense fallback={Loading}>{routes}</Suspense>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

export default compose(withRouter, connect(mapStateToProps))(App);
