import { createContext, useContext, useState, useEffect } from "react";
import {
	getAllPosts,
	createPost,
	updatePostById,
	deletePostById,
} from "../services/posts.services.js";
import {
	getTopLevelComments,
	getCommentReplies,
	createComment,
	updateComment,
	deleteCommentById,
} from "../services/comments.services.js";
import { toggleLike } from "../services/likes.services.js";

const PostContext = createContext();

export default function PostContextProvider({ children }) {
	const [posts, setPosts] = useState([]);
	const [comments, setComments] = useState([]);
	const [replies, setReplies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(function fetchPostsOnLoad() {
		async function fetchPosts() {
			setLoading(true);
			try {
				const postsData = await getAllPosts();
				setPosts(postsData);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}
		fetchPosts();
	}, []);

	async function addPost(post, token) {
		try {
			const newPost = await createPost(post, token);
			setPosts((prevPosts) => [newPost, ...prevPosts]);
		} catch (err) {
			setError(err.message);
		}
	}

	async function updatePost(postToUpdate, token) {
		try {
			const updatedPost = await updatePostById(
				postToUpdate.id,
				postToUpdate,
				token
			);
			setPosts((prevPosts) =>
				prevPosts.map((post) =>
					post.id === updatedPost.id ? { ...post, ...updatedPost } : post
				)
			);
		} catch (err) {
			setError(err.message);
		}
	}

	async function deletePost(postId) {
		try {
			await deletePostById(postId);
			setPosts((prevPosts) => prevPosts.filter((p) => p.id !== postId));
		} catch (err) {
			setError(err.message);
		}
	}

	//commentsData
	async function fetchTopLevelComments(postId) {
		setLoading(true);
		try {
			const topLevelComments = await getTopLevelComments(postId);
			setComments(topLevelComments);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	}

	async function fetchCommentReplies(commentId) {
		setLoading(true);
		try {
			const replies = await getCommentReplies(commentId);
			setReplies(replies);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	}

	async function addCommentToPost(comment, token) {
		try {
			const newComment = await createComment(comment, token);
			setComments((prevComments) => [newComment, ...prevComments]);
		} catch (err) {
			setError(err.message);
		}
	}

	async function editComment(commentId, commentToUpdate) {
		try {
			const updatedComment = await updateComment(commentId, commentToUpdate);
			setComments((prevComments) =>
				prevComments.map((comment) =>
					comment.id === commentId ? { ...comment, ...updatedComment } : comment
				)
			);
		} catch (err) {
			setError(err.message);
		}
	}

	async function deleteComment(commentId) {
		try {
			await deleteCommentById(commentId);
			setComments((prevComments) =>
				prevComments.filter((comment) => comment.id !== commentId)
			);
		} catch (err) {
			setError(err.message);
		}
	}

	//likes
	async function likePost(userId, postId) {
		try {
			await toggleLike(userId, postId);
			setPosts((prevPosts) =>
				prevPosts.map((post) =>
					post.id === postId
						? { ...post, like_count: post.like_count + 1 }
						: post
				)
			);
		} catch (err) {
			setError(err.message);
		}
	}

	async function unlikePost(userId, postId) {
		try {
			await toggleLike(userId, postId);
			setPosts((prevPosts) =>
				prevPosts.map((post) =>
					post.id === postId
						? { ...post, like_count: post.like_count - 1 }
						: post
				)
			);
		} catch (err) {
			setError(err.message);
		}
	}

	const contextValue = {
		posts,
		comments,
		replies,
		loading,
		error,
		addPost,
		updatePost,
		deletePost,
		addCommentToPost,
		editComment,
		deleteComment,
		fetchTopLevelComments,
		fetchCommentReplies,
		likePost,
		unlikePost,
	};

	return (
		<PostContext.Provider value={contextValue}>{children}</PostContext.Provider>
	);
}

export function usePostContext() {
	return useContext(PostContext);
}
