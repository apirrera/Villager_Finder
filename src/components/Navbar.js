import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					Villager Finder
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link
								to="/villagers"
								className="nav-link"
								aria-current="page"
								href="#"
							>
								Villagers
							</Link>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Dropdown
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<a class="dropdown-item" href="#">
										Species
									</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">
										Personality
									</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">
										Gender
									</a>
								</li>
							</ul>
						</li>
					</ul>
					<form className="d-flex">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success me-2" type="submit">
							Search
						</button>
						<button className="me-2">Favorites</button>

						<button className="me-2">
							<Link
								to="/register"
								className="nav-link"
								aria-current="page"
								href="#"
							>
								Register
							</Link>
						</button>

						<button className="me-2">
							<Link
								to="/login"
								className="nav-link"
								aria-current="page"
								href="#"
							>
								Login
							</Link>
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
