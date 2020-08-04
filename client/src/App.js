//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//Build App
import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Components
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import MobileNav from "./components/layout/MobileNav";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";
import Locations from "./components/locations/Locations";
import Profile from "./components/profile/Profile";
import UserProfile from "./components/profile/UserProfile";
import PrivateRoute from "./components/routing/PrivateRoute";
import "./App.css";
// Redux stuff
import { Provider } from "react-redux";
import store from "./store";
//On load
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          {/* <Navbar /> */}

          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/alllocations" component={Locations} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/me" component={UserProfile} />
            </Switch>
          </section>
        </Fragment>
        <MobileNav sticky="bottom" />
      </Router>
    </Provider>
  );
};

export default App;
