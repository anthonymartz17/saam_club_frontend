import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import AuthContextProvider from "./context/AuthContext";
export default function Layout() {
	return (
		<AuthContextProvider>
			<div className="bg-dark text-light min-h-screen roboto-light">
				<Header />
				<main className="bg-blue-800 px-4">
					<Outlet />
				</main>
			</div>
		</AuthContextProvider>
	);
}
