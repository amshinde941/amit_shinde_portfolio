import React, { Component } from "react";
import "./Navigation.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";

const onMouseEnter = (event, color) => {
	const el = event.target;
	el.style.backgroundColor = color;
}

const onMouseOut = (event) => {
	const el = event.target;
	el.style.backgroundColor = "transparent";
}

class Header extends Component {

	render() {
		return (
			<Fade top duration={1000} distance="20px">
				<div>
					<header className="header">
						<NavLink to="/home" tag={Link} className="logo" style={{ fontSize: "2em" }}>
							<span style={{ color: "black", paddingLeft: "2em" }}> &lt;</span>
							<span className="nav-title" style={{ color: "blue" }}>
								Amit Shinde
						</span>
							<span style={{ color: "black" }}>/&gt;</span>
						</NavLink>
						<input className="menu-btn" type="checkbox" id="menu-btn" />
						<label className="menu-icon" htmlFor="menu-btn">
							<span
								className="navicon"

							></span>
						</label>
						<ul className="menu" >
							<li>
								<NavLink
									to="/home"
									tag={Link}
									activeStyle={{ fontWeight: "bold" }}
									style={{ color: "black" }}
									onMouseEnter={(event) => onMouseEnter(event, "#A6E1FA")}
									onMouseOut={(event) => onMouseOut(event)}
								>
									Home
							</NavLink>
							</li>
							<li>
								<NavLink
									to="/projects"
									tag={Link}
									activeStyle={{ fontWeight: "bold" }}
									style={{ color: "black" }}
									onMouseEnter={(event) => onMouseEnter(event, "#A6E1FA")}
									onMouseOut={(event) => onMouseOut(event)}
								>
									Projects
							</NavLink>
							</li>
							<li>
								<NavLink
									to="/education"
									tag={Link}
									activeStyle={{ fontWeight: "bold" }}
									style={{ color: "black" }}
									onMouseEnter={(event) => onMouseEnter(event, "#A6E1FA")}
									onMouseOut={(event) => onMouseOut(event)}
								>
									Education
							</NavLink>
							</li>
							<li>
								<NavLink
									to="/contact"
									tag={Link}
									activeStyle={{ fontWeight: "bold" }}
									style={{ color: "black" }}
									onMouseEnter={(event) => onMouseEnter(event, "#A6E1FA")}
									onMouseOut={(event) => onMouseOut(event)}
								>
									contact me
							</NavLink>
							</li>
						</ul>
					</header>
				</div>
			</Fade>
		);
	}
}
export default Header;
