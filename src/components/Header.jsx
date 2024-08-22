import { useState } from "react";
import saamLogo from "../assets/saam_logo.svg";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className="text-light p-4 flex justify-between items-center">
			<img src={saamLogo} alt="app logo" className="w-20" />
			<span
				onClick={() => setIsOpen(!isOpen)}
				class="md:hidden material-symbols-outlined"
			>
				menu
			</span>
			<nav className="hidden md:flex gap-4">
				<Link to="/auth" className="btn btn_lightdark">
					Login
				</Link>
				<Link to="/auth/signup" className="btn btn_accent">
					Create Account
				</Link>
			</nav>

			<MobileMenu isOpen={isOpen} onSetIsOpen={setIsOpen} />
		</header>
	);
}
