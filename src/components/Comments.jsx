import React, { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { usePostContext } from "../context/PostContext";

const commentsData = [
	{
		id: 1,
		post_id: 1,
		user_id: 1,
		user_uid: "user1_uid",
		user_name: "jose loren in",
		img_url:
			"https://media.istockphoto.com/id/1201144328/photo/smiling-black-man-in-suit-posing-on-studio-background.jpg?s=612x612&w=0&k=20&c=abcU_jcFCUgSkmpXAd5qfrsUFUcdv6oOMdtW2U-m_8g=",
		parent_comment_id: null,
		replies_count: 0,
		content: "Great post!",
		created_at: "2024-08-23T13:03:45.925Z",
		updated_at: "2024-08-23T13:03:45.925Z",
	},
	{
		id: 2,
		post_id: 1,
		user_id: 2,
		user_uid: "user2_uid",
		user_name: "maria",
		img_url:
			"https://images.squarespace-cdn.com/content/v1/54c6eb0ce4b0f6cdd67c1196/1642223720668-I2XL35T6SMPTDZPOTRFJ/DCP_0085.jpg",
		parent_comment_id: null,
		replies_count: 3,
		content:
			"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		created_at: "2024-08-23T13:03:45.925Z",
		updated_at: "2024-08-23T13:03:45.925Z",
	},
];

export default function Comments({ isOpen, onSetIsOpen }) {
	const { loading, error, comments, fetchTopLevelComments } =
		usePostContext();
	const navigate = useNavigate();
	const { currentUser, logout } = useAuth();
	// const [comments, setComments] = useState([]);

	useEffect(() => {
		fetchTopLevelComments(1);
	}, []);

	return (
		<>
			<div
				className={`overflow-y-auto max-h-screen  bg-light text-dark flex flex-col fixed top-0 right-0  h-full duration-300 z-10 w-3/4 max-w-[400px] transform  ${
					isOpen ? "translate-x-0 shadow-left" : "translate-x-full"
				} transition-transform`}
			>
				<div className="flex flex-col px-2 py-4 gap-4">
					<div className="flex gap-2 justify-between  items-center">
						<span className="roboto-bold">Responses ({2})</span>

						<span
							className="material-symbols-outlined cursor-pointer text-[1.5rem]"
							onClick={() => onSetIsOpen(false)}
						>
							close
						</span>
					</div>
					{currentUser && <CommentForm />}
					{loading && <p>Loading...</p>}
					{error && <p className="text-red-500">Error: {error}</p>}
					{!loading && !error && (
						<ul className="flex flex-col gap-4  ">
							{comments.map((comment) => (
								<Comment key={comment.id} comment={comment} />
							))}
						</ul>
					)}
				</div>
			</div>
			<div
				onClick={() => onSetIsOpen(false)}
				className={`md:hidden mobile_menu_backdrop ${isOpen ? "open" : ""}`}
			></div>
		</>
	);
}
