import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import RegistrationForm from "./registration/RegistrationPage";
import LoginForm from "./login/LoginForm";
import Villagers from "./villagers/Villagers";
import Species from "./villagers/Species";

function Routes() {
  const [villagers, setVillagers] = useState([]);

	useEffect(() => {
		fetch("https://acnhapi.com/v1a/villagers")
			.then((response) => response.json())
			.then((response) => {
				setVillagers(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

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
			<Route exact path="/villagers">
				<Villagers villagers={villagers}/>
			</Route>
      <Route path="/villagers/species">
        <Species villagers={villagers}/>
      </Route>
		</Switch>
	);
}

export default Routes;
