import React from "react";
import saamLogo from "../assets/saam_logo.svg";
import { Link } from "react-router-dom";
export default function Header() {
	return (
		<div className="text-light px-4 flex justify-between items-center">
			<img src={saamLogo} alt="app logo" className="w-24" />
			<div className="header_auth_buttons">
				<Link to="/auth" className="btn btn_dark">
					Login
				</Link>
				<Link to="/auth/signup" className="btn btn_accent">
					Create Account
				</Link>
			</div>
		</div>
	);
}
