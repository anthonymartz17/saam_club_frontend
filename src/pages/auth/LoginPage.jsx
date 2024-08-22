import { Link } from "react-router-dom";

export default function LoginPage() {
	function handleSubmit(e) {
		e.preventDefault();
		console.log("submitted");
	}
	return (
		<form
			className="flex flex-col items-center justify-center h-screen"
			onSubmit={handleSubmit}
		>
			<div className="flex flex-col gap-2 shadow-light bg-lightdark p-4 rounded-md min-w-96">
				<h1 className="roboto-bold text-2xl text-center">Sign In</h1>
				<div className="flex flex-col gap-2">
					<div className="flex flex-col gap-1">
						<label htmlFor="">Email:</label>
						<input
							type="text"
							placeholder="username"
							id="username"
							name="username"
							className="border bg-dark  rounded-md p-2"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="">Password:</label>
						<input
							type="text"
							placeholder="Password"
							id="password"
							name="password"
							className="border bg-dark  rounded-md p-2"
						/>
					</div>
				</div>
				<button className="btn btn_accent">Login</button>
				<Link to="/auth/forgotpassword">Forgot password?</Link>
				<p>
					<span>First time here?</span>
					<Link to="/auth/signup" className="text-accent">
						{" "}
						Create an account
					</Link>
				</p>
			</div>
		</form>
	);
}
