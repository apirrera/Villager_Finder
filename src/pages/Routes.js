import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import RegistrationForm from "./registration/RegistrationPage";
import LoginForm from "./login/LoginForm";
import Villagers from "./villagers/Villagers";

function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/register">
				<RegistrationForm />
			</Route>
			<Route exact={true} path="/login">
				<LoginForm />
			</Route>
			<Route path="/villagers">
				<Villagers />
			</Route>
		</Switch>
	);
}

export default Routes;
