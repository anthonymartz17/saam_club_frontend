import React, { useState, useEffect } from "react";
import { timeAgo } from "../utils/formatUtils";
import { usePostContext } from "../context/PostContext";
import { useAuth } from "../context/AuthContext";
import "./Posts.css";

export default function Posts({ isOpen, onSetIsOpen }) {
	const { posts, likePost, unlikePost } = usePostContext();
	const { currentUser } = useAuth();
	const [expandedPostId, setExpandedPostId] = useState(null);

	const handleExpandToggle = (id) => {
		setExpandedPostId(expandedPostId === id ? null : id);
	};

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
								<p className="flex justify-center items-center cursor-pointer gap-1">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="20px"
										viewBox="0 -960 960 960"
										width="20px"
										fill="#e8eaed"
									>
										<path d="m480-144-50-45q-100-89-165-152.5t-102.5-113Q125-504 110.5-545T96-629q0-89 61-150t150-61q49 0 95 21t78 59q32-38 78-59t95-21q89 0 150 61t61 150q0 43-14 83t-51.5 89q-37.5 49-103 113.5T528-187l-48 43Zm0-97q93-83 153-141.5t95.5-102Q764-528 778-562t14-67q0-59-40-99t-99-40q-35 0-65.5 14.5T535-713l-35 41h-40l-35-41q-22-26-53.5-40.5T307-768q-59 0-99 40t-40 99q0 33 13 65.5t47.5 75.5q34.5 43 95 102T480-241Zm0-264Z" />
									</svg>
									{post.like_count}
								</p>
								<p className="flex justify-center items-center cursor-pointer gap-1">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="20px"
										viewBox="0 -960 960 960"
										width="20px"
										fill="#e8eaed"
									>
										<path d="M96-96v-696q0-29.7 21.15-50.85Q138.3-864 168-864h624q29.7 0 50.85 21.15Q864-821.7 864-792v480q0 29.7-21.15 50.85Q821.7-240 792-240H240L96-96Zm114-216h582v-480H168v522l42-42Zm-42 0v-480 480Z" />
									</svg>
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
									<svg
										xmlns="http://www.w3.org/2000/svg"
										height="20px"
										viewBox="0 -960 960 960"
										width="20px"
										fill="#e8eaed"
									>
										<path d="M648-96q-50 0-85-35t-35-85q0-9 4-29L295-390q-16 14-36.05 22-20.04 8-42.95 8-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 43 8t36 22l237-145q-2-7-3-13.81-1-6.81-1-15.19 0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-43-8t-36-22L332-509q2 7 3 13.81 1 6.81 1 15.19 0 8.38-1 15.19-1 6.81-3 13.81l237 145q16-14 36.05-22 20.04-8 42.95-8 50 0 85 35t35 85q0 50-35 85t-85 35Zm0-72q20.4 0 34.2-13.8Q696-195.6 696-216q0-20.4-13.8-34.2Q668.4-264 648-264q-20.4 0-34.2 13.8Q600-236.4 600-216q0 20.4 13.8 34.2Q627.6-168 648-168ZM216-432q20.4 0 34.2-13.8Q264-459.6 264-480q0-20.4-13.8-34.2Q236.4-528 216-528q-20.4 0-34.2 13.8Q168-500.4 168-480q0 20.4 13.8 34.2Q195.6-432 216-432Zm432-264q20.4 0 34.2-13.8Q696-723.6 696-744q0-20.4-13.8-34.2Q668.4-792 648-792q-20.4 0-34.2 13.8Q600-764.4 600-744q0 20.4 13.8 34.2Q627.6-696 648-696Zm0 480ZM216-480Zm432-264Z" />
									</svg>
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
