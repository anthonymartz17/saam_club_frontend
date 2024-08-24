const SAAM_API_URL = import.meta.env.VITE_SAAM_CLUB_API_URL;

export async function getTopLevelComments(postId) {
	try {
		const response = await fetch(
			`${SAAM_API_URL}/comments/${postId}/top-level-comments`
		);
		if (!response.ok) {
			throw new Error("Failed to fetch top-level comments");
		}
		return await response.json();
	} catch (error) {
		console.error(
			`Error fetching top-level comments for post with id ${postId}:`,
			error
		);
		throw error;
	}
}

export async function getCommentReplies(commentId) {
	try {
		const response = await fetch(`${SAAM_API_URL}/comments/${commentId}/replies`);
		if (!response.ok) {
			throw new Error("Failed to fetch comment replies");
		}
		return await response.json();
	} catch (error) {
		console.error(
			`Error fetching replies for comment with id ${commentId}:`,
			error
		);
		throw error;
	}
}

export async function getCommentById(commentId) {
	try {
		const response = await fetch(`${SAAM_API_URL}/comments/${commentId}`);
		if (!response.ok) {
			throw new Error("Failed to fetch comment");
		}
		return await response.json();
	} catch (error) {
		console.error(`Error fetching comment with id ${commentId}:`, error);
		throw error;
	}
}

export async function createComment(comment,token) {
	try {
		const response = await fetch(`${SAAM_API_URL}/comments`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(comment),
		});
		if (!response.ok) {
			throw new Error("Failed to create comment");
		}
		return await response.json();
	} catch (error) {
		console.error("Error creating comment:", error);
		throw error;
	}
}

export async function updateComment(commentId, updatedComment) {
	try {
		const response = await fetch(`${SAAM_API_URL}/comments/${commentId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedComment),
		});
		if (!response.ok) {
			throw new Error("Failed to update comment");
		}
		return await response.json();
	} catch (error) {
		console.error(`Error updating comment with id ${commentId}:`, error);
		throw error;
	}
}

export async function deleteCommentById(commentId) {
	try {
		const response = await fetch(`${SAAM_API_URL}/comments/${commentId}`, {
			method: "DELETE",
		});
		if (!response.ok) {
			throw new Error("Failed to delete comment");
		}
		return await response.json();
	} catch (error) {
		console.error(`Error deleting comment with id ${commentId}:`, error);
		throw error;
	}
}
