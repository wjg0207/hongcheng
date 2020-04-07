import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import asyncComponent from "./components/async/asyncComponent"
const FooterComponent = asyncComponent(() => import("./components/footer/Footer"))
class RouterComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <Switch>
              <Route path={"/mobile"} component={FooterComponent}></Route>
              <Redirect to={"/mobile/home"}></Redirect>
            </Switch>
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default RouterComponent;