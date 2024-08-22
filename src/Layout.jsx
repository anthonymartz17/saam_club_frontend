import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import AuthContextProvider from "./context/AuthContext";
export default function Layout() {
	return (
		<AuthContextProvider>
			<div className="bg-dark text-light min-h-screen flex flex-col">
				<Header className="bg-dark text-light" />
				<main className="px-4 flex-1">
					<Outlet />
				</main>
			</div>
		</AuthContextProvider>
	);
}
