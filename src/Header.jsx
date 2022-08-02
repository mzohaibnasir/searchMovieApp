import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<>
			<div className="header">
				<span className="left">
					<span className="appTitle">MovieApp</span>
				</span>
				<span className="right">
					<span className="appTitle">Home</span>
					<span className="appTitle">Stats</span>
					<span className="appTitle">Details</span>

					<span className="appTitle">Contact Us</span>
					{/* <span className="appTitle">liveScore</span> */}
				</span>
			</div>
		</>
	);
};

export default Header;
