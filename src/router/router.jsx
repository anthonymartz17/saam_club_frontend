import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import FeedPage from "../pages/FeedPage";
import NotFound from "../pages/ NotFound";
import Dashboard from "../pages/account/Dashboard";
import Profile from "../pages/account/ProfilePage";
import Auth from "../pages/auth/Auth";
import Login from "../pages/auth/LoginPage";
import SignUp from "../pages/auth/SignUpPage";
import ForgotPassword from "../pages/auth/ForgotPasswordPage";

export default createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <FeedPage />,
			},
			{
				path: "/account",
				element: <Dashboard />,
				children: [
					{
						path: "",
						element: <Profile />,
					},
				],
			},
			{
				path: "/auth",
				element: <Auth />,
				children: [
					{
						path: "",
						element: <Login />,
					},
					{
						path: "signup",
						element: <SignUp />,
					},
					{
						path: "forgot-password",
						element: <ForgotPassword />,
					},
				],
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);
