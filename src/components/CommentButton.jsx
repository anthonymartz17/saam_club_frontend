import React from "react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { usePostContext } from "../context/PostContext";
export default function CommentButton() {
	const { currentUser, user } = useAuth();
	const { addPost } = usePostContext();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [post, setPost] = useState("");

	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	async function handlePost() {
		e.preventDefault();
		try {
			await addPost({ user_id: user.id, post }, currentUser.accessToken);
			setPost("");
			closeModal();
		} catch (error) {
			console.error("Error adding post:", error);
		}
	}

	return (
		<div className="comment-button my-10">
			<div
				onClick={openModal}
				className="flex cursor-pointer items-center bg-gray-800 rounded-lg p-3 shadow-md w-full max-w-xl mx-auto"
			>
				<p className="flex-1 opacity-40">What is on your mind?</p>
				<div
					placeholder="What's on your mind?"
					className="bg-transparent text-gray-400 focus:outline-none flex-grow"
				/>
				<div className="bg-accent w-1/4 rounded text-center py-2">Post</div>
			</div>

			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-gray-900 text-white rounded-lg p-6 w-full max-w-lg">
						<h2 className="text-xl mb-4">Create Post</h2>
						<form onSubmit={handlePost}>
							<textarea
								value={post}
								onChange={(e) => setPost(e.target.value)}
								className="w-full h-32 p-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none"
								placeholder="What's on your mind?"
							></textarea>
							<div className="mt-4 flex justify-end">
								<button
									className="bg-gray-700 text-white px-4 py-2 rounded-lg mr-2"
									onClick={closeModal}
								>
									Cancel
								</button>
								<button className="btn_accent text-white px-4 py-2 rounded-lg">
									Post
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
