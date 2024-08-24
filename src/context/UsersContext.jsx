import { createContext, useContext, useState } from "react";

import {
	getAllUsers,
	createUser,
	updateUserById,
} from "../services/users.services.js";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	async function fetchAllUsers() {
		setLoading(true);
		try {
			const usersData = await getAllUsers();
			setUsers(usersData);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	}

	async function addUser(user, token) {
		try {
			const newUser = await createUser(user, token);
			setUsers((prevUsers) => [newUser, ...prevUsers]);
		} catch (err) {
			setError(err.message);
		}
	}

	async function updateUser(userId, userToUpdate, token) {
		try {
			const updatedUser = await updateUserById(userId, userToUpdate, token);
			setUsers((prevUsers) =>
				prevUsers.map((user) =>
					user.id === userId ? { ...user, ...updatedUser } : user
				)
			);
		} catch (err) {
			setError(err.message);
		}
	}
	const contextValue = {
		users,
		loading,
		error,
		fetchAllUsers,
		addUser,
		updateUser,
	};

	return (
		<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
	);
}

export function useUserContext() {
	return useContext(UserContext);
}
