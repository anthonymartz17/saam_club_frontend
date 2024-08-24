const SAAM_API_URL = import.meta.env.VITE_SAAM_CLUB_API_URL;

export async function fetchAllUsers() {
	try {
		const response = await fetch(`${SAAM_API_URL}/users`);
		if (!response.ok) {
			throw new Error("Failed to fetch users");
		}
		return await response.json();
	} catch (error) {
		console.error("Error fetching all users:", error);
		throw error;
	}
}

export async function fetchUserProfile(token) {
	try {
		const response = await fetch(`${SAAM_API_URL}/users/profile`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (!response.ok) {
			throw new Error("Failed to fetch user");
		}
		return await response.json();
	} catch (error) {
		console.error(`Error fetching user with id ${userId}:`, error);
		throw error;
	}
}

export async function createUser(user, token) {
	try {
		const response = await fetch(`${SAAM_API_URL}/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(user),
		});
		if (!response.ok) {
			throw new Error("Failed to create user");
		}
		return await response.json();
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
}

export async function updateUserById(userId, updatedUser, token) {
	try {
		const response = await fetch(`${SAAM_API_URL}/users/${userId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(updatedUser),
		});
		if (!response.ok) {
			throw new Error("Failed to update user");
		}
		return await response.json();
	} catch (error) {
		console.error(`Error updating user with id ${userId}:`, error);
		throw error;
	}
}
