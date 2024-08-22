import React from "react";
import saamLogo from "../assets/saam_logo.svg";
import { Link } from "react-router-dom";
export default function Header() {
	return (
		<div className="text-light p-4 flex justify-between items-center">
			<img src={saamLogo} alt="app logo" className="w-20" />
			<span class="md:hidden material-symbols-outlined">menu</span>
			<div className="hidden md:flex gap-4">
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
