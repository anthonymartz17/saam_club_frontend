import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./context/AuthContext";
export default function Layout() {
	return (
		<AuthContextProvider>
			<div className="bg-dark text-light min-h-screen roboto-light">
				<header className="px-4 py-2">
					<Navbar />
				</header>
				<main className="bg-blue-800 px-4">
					<Outlet />
				</main>
			</div>
		</AuthContextProvider>
	);
}
