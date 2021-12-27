import React from "react";
import FosterForm from "./FosterForm";
import FosterInfo from "./FosterInfo";

function Foster() {
	return (
		<div>
			<nav className="navbar sticky-top navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						Header temp placement
					</a>
				</div>
			</nav>
            <FosterInfo />
            <FosterForm />
		</div>
	);
}

export default Foster;
