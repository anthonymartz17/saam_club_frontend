import { useState } from "react";
import saamLogo from "../assets/saam_logo.svg";
import MobileMenu from "./MobileMenu";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import CommentButton from "./CommentButton";
export default function Header() {
	const navigate = useNavigate();
	const { currentUser, logout } = useAuth();
	const [isOpen, setIsOpen] = useState(false);

	async function signout() {
		try {
			await logout();

			navigate("/");
		} catch (error) {
			throw error;
		}
	}
	return (
		<header className="text-light p-4 flex justify-between items-center">
			<img src={saamLogo} alt="app logo" className="w-20" />
			<span
				onClick={() => setIsOpen(!isOpen)}
				class="sm:hidden material-symbols-outlined"
			>
				menu
			</span>
			<nav className="hidden sm:flex gap-4 w-full justify-between">
				<ul className="flex  gap-4 justify-self-center mx-auto ">
					<li className="hover:text-accent transition duration-300 ease-in-out roboto-bold">
						<Link to="/" className="flex py-2 gap-1 mb-1">
							<span>Feed</span>
						</Link>
					</li>
					{currentUser && (
						<li className=" hover:text-accent transition duration-300 ease-in-out roboto-bold">
							<Link to="/account" className="flex py-2 gap-1 mb-1">
								<span>Profile</span>
							</Link>
						</li>
					)}
				</ul>
				<div className="flex gap-4">
					{currentUser ? (
						<button onClick={() => signout()} className="btn btn_lightdark">
							Logout
						</button>
					) : (
						<div className="flex  gap-2">
							<Link to="/auth" className="btn btn_lightdark">
								Login
							</Link>
							<Link to="/auth/signup" className="btn btn_accent">
								Create Account
							</Link>
						</div>
					)}
				</div>
			</nav>
			<CommentButton />

			<MobileMenu isOpen={isOpen} onSetIsOpen={setIsOpen} />
		</header>
		
	);
}
