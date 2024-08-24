const SAAM_API_URL = import.meta.env.VITE_SAAM_CLUB_API_URL;

export async function getAllPosts() {
	try {
		const response = await fetch(`${SAAM_API_URL}/posts`);
		if (!response.ok) {
			throw new Error("Failed to fetch posts");
		}
		return await response.json();
	} catch (error) {
		console.error("Error fetching all posts:", error);
		throw error;
	}
}

export async function getPostById(postId) {
	try {
		const response = await fetch(`${SAAM_API_URL}/posts/${postId}`);
		if (!response.ok) {
			throw new Error("Failed to fetch post");
		}
		return await response.json();
	} catch (error) {
		console.error(`Error fetching post with id ${postId}:`, error);
		throw error;
	}
}

export async function createPost(post,token) {
	try {
		const response = await fetch(`${SAAM_API_URL}/posts`, {
			method: "POST",
			headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(post),
		});
		if (!response.ok) {
			throw new Error("Failed to create post");
		}
		return await response.json();
	} catch (error) {
		console.error("Error creating post:", error);
		throw error;
	}
}

export async function updatePostById(postId, updatedPost,token) {
	try {
		const response = await fetch(`${SAAM_API_URL}/posts/${postId}`, {
			method: "PUT",
			headers: {
        "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(updatedPost),
		});
		if (!response.ok) {
			throw new Error("Failed to update post");
		}
		return await response.json();
	} catch (error) {
		console.error(`Error updating post with id ${postId}:`, error);
		throw error;
	}
}

export async function deletePostById(postId) {
	try {
		const response = await fetch(`${SAAM_API_URL}/posts/${postId}`, {
			method: "DELETE",
		});
		if (!response.ok) {
			throw new Error("Failed to delete post");
		}
		return await response.json();
	} catch (error) {
		console.error(`Error deleting post with id ${postId}:`, error);
		throw error;
	}
}
