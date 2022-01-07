import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Villagers from "../components/Villagers";

function Routes(){

  return (
    <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route path="/villagers">
        <Villagers />
      </Route>
    </Switch>
  )
}

export default Routes;