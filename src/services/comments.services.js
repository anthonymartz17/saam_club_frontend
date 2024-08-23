
const SAAM_API_URL = import.meta.env.VITE_SAAM_CLUB_API_URL


export function fetchCommentsByPostId(postId) {
	return fetch(
		`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0864595a/comments?item_id=${postId}`
	)
		.then((response) => response.json())
		.then((data) => data.comments);
}