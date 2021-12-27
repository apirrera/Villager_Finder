import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Foster from "./fosterpage/Foster";

function Routes(){

  return (
    <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route path='/foster'>
      <Foster />
      </Route>
    </Switch>
  )
}

export default Routes;