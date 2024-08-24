import { createContext, useContext, useState, useEffect } from "react";

import { auth } from "../../firebase-config";
import { fetchUserProfile } from "../services/users.services";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
	onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext({
	currentUser: {},
	signUp: () => {},
	login: () => {},
	logout: () => {},
	resetPassword: () => {},
});

export default function AuthContextProvider({ children }) {
	const [currentUser, setCurrentUser] = useState({});
	const [user, setUser] = useState({});

	async function signUp(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}
	async function login(email, password) {
		const res = await signInWithEmailAndPassword(auth, email, password);
		const userData = await fetchUserProfile(res.user.accessToken);
		console.log(userData, "userData");
		setUser(userData);
	}
	async function logout() {
		return signOut(auth);
	}
	async function resetPassword(email) {
		return sendPasswordResetEmail(auth, email);
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			console.log(auth, "auth");
			setCurrentUser(user);
		});

		return () => unsubscribe();
	}, []);

	const ctxValue = {
		currentUser,
		user,
		signUp,
		login,
		logout,
		resetPassword,
	};

	return (
		<AuthContext.Provider value={ctxValue}>{children}</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);
