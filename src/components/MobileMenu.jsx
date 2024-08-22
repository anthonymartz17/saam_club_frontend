import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function MobileMenuUser({ isOpen, onSetIsOpen }) {
	const navigate = useNavigate();
	const { currentUser, logout } = useAuth();

	async function signout() {
		try {
			await logout();
			onSetIsOpen(false);
			navigate("/auth");
		} catch (error) {
			throw error;
		}
	}

	return (
		<>
			<nav
				className={`bg-lightdark md:hidden flex flex-col fixed top-0 right-0  h-full duration-300 z-10 w-3/4 transform ${
					isOpen ? "translate-x-0 shadow-left" : "translate-x-full"
				} transition-transform`}
			>
				<div className="flex justify-between px-2 py-4">
					<div className="flex gap-2 items-center">
						<span class="material-symbols-outlined">account_circle</span>
						<span>Username</span>
					</div>

					<span
						className="material-symbols-outlined cursor-pointer"
						onClick={() => onSetIsOpen(false)}
					>
						close
					</span>
				</div>

				<ul className="mt-10 px-2 flex-1">
					<li>
						<NavLink
							to="/"
							className="flex py-2 gap-1 mb-1"
							onClick={() => onSetIsOpen(false)}
						>
							<span class="material-symbols-outlined">list_alt</span>
							<span>Feed</span>
						</NavLink>
					</li>
					{currentUser && (
						<li>
							<NavLink
								to="/dashboard"
								className="flex py-2 gap-1 mb-1"
								onClick={() => onSetIsOpen(false)}
							>
								<span class="material-symbols-outlined">person</span>
								<span>Profile</span>
							</NavLink>
						</li>
					)}
				</ul>

				<div className="text-center mb-10 px-2">
					{currentUser ? (
						<NavLink to="/admin/auth">
							<button
								onClick={() => signout()}
								type="button"
								className="btn btn_dark"
							>
								Log out
							</button>
						</NavLink>
					) : (
						<div className="flex flex-col gap-2">
							<NavLink
								onClick={() => onSetIsOpen(false)}
								to="/auth"
								className="btn btn_dark"
							>
								Login
							</NavLink>
							<NavLink
								onClick={() => onSetIsOpen(false)}
								to="/auth/signup"
								className="btn btn_accent"
							>
								Create Account
							</NavLink>
						</div>
					)}
				</div>
			</nav>
			<div
				onClick={() => onSetIsOpen(false)}
				className={`md:hidden mobile_menu_backdrop ${isOpen ? "open" : ""}`}
			></div>
		</>
	);
}
