import React, { useState, useEffect } from "react";
import { timeAgo } from "../utils/formatUtils";
import { usePostContext } from "../context/PostContext";
import { useAuth } from "../context/AuthContext";
import "./Posts.css";

export default function Posts({ isOpen, onSetIsOpen }) {
	const { posts, toggleLikeState, fetchTopLevelComments } = usePostContext();
	const { currentUser } = useAuth();
	const [expandedPostId, setExpandedPostId] = useState(null);

	const handleExpandToggle = (id) => {
		setExpandedPostId(expandedPostId === id ? null : id);
	};

	function seeComments(postId) {
		fetchTopLevelComments(postId);
		onSetIsOpen(true);
	}

	return (
		<div className="w-[50%] mx-[auto]">
			<h2 className="text-white-500 text-[36px] font-bold mb-10">Notes</h2>
			{posts.map((post) => {
				const isExpanded = expandedPostId === post.id;

				return (
					<div
						key={post.id}
						className="grid grid-cols-[8%_92%] grid-rows-[auto_auto] gap-2"
					>
						<div className="flex justify-center items-center">
							<img
								src="https://picsum.photos/200"
								alt="Profile"
								className="w-[80%] rounded-full"
							/>
						</div>
						<div>
							<div>
								{post.username}{" "}
								<span className="text-gray-500">
									{" "}
									{timeAgo(post.created_at)}
								</span>
							</div>
							<div className="text-gray-500">
								@{post.username} ∘{" "}
								<span className="text-orange-500">Subscribe</span>
							</div>
						</div>
						<div className="ml-1/4 col-start-2">
							<p className={`mb-2 ${!isExpanded ? "truncate-content" : ""}`}>
								{post.content}
							</p>
							{post.content.length > 300 && (
								<button
									onClick={() => handleExpandToggle(post.id)}
									className="text-blue-500 cursor-pointer"
								>
									{isExpanded ? "Show Less" : "Show More"}
								</button>
							)}
							<div className="flex justify-around items-center">
								<p
									onClick={() => seeComments(post.id)}
									className="flex justify-center items-center cursor-pointer gap-1"
								>
									<span className="material-symbols-outlined text-gray-500">
										favorite
									</span>
									{post.like_count}
								</p>
								<p className="flex justify-center items-center cursor-pointer gap-1">
									<span className="material-symbols-outlined text-gray-500">
										chat_bubble
									</span>
									{post.comment_count}
								</p>
								<p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="20px"
										viewBox="0 -960 960 960"
										width="20px"
										fill="#e8eaed"
									>
										<path d="M480-192q-120 0-205.5-85T192-486l-57 57-51-51 144-144 144 144-51 51-57-57q-2 94 62 158t154 64q22 0 42-4t39-12l53 53q-30 16-63.5 25.5T480-192Zm252-144L588-480l51-51 57 57q2-94-62-158t-154-64q-21 0-41.5 4T399-680l-53-53q30-16 64-25.5t70-9.5q121 0 206 85t82 209l57-57 51 51-144 144Z" />
									</svg>
								</p>
								<p>
									<span className="material-symbols-outlined text-gray-500">
										share
									</span>
								</p>
							</div>
						</div>
						<br />
					</div>
				);
			})}
		</div>
	);
}
