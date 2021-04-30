import { Route, Switch } from "react-router-dom";
// import { observer } from "mobx-react";

import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
const Routes = () => {
  return (
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
