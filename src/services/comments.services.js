const SAAM_API_URL = import.meta.env.VITE_SAAM_CLUB_API_URL;

// getTopLevelComments,
// getCommentReplies,
// getCommentById,
// createComment,
// updateComment,
// deleteComment,

export async function getTopLevelComments(postId) {
	try {
		const res = await fetch(
			`${SAAM_API_URL}/comments/${postId}/top-level-comments`
		);
		if (!res.ok) {
			throw new Error(res.statusText);
		}
		const data = await res.json();
		return data;
	} catch (error) {
		throw error;
	}
}
