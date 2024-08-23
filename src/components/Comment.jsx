import React, { useState } from "react";
import { timeAgo, capitalizeWord } from "../utils/formatUtils";
import CommentForm from "./CommentForm";
const MAX_COMMENT_LENGTH = 150;
const replies = [
	{
		id: 1,
		post_id: 1,
		user_id: 1,
		user_uid: "user1_uid",
		user_name: "Eshli",
		img_url:
			"https://imageio.forbes.com/specials-images/imageserve/609946db7c398a0de6c94893/Mid-Adult-Female-Entrepreneur-With-Arms-Crossed-/960x0.jpg?height=473&width=711&fit=bounds",
		parent_comment_id: 2,
		content: "Great post!",
		created_at: "2024-08-23T13:03:45.925Z",
		updated_at: "2024-08-23T13:03:45.925Z",
	},
	{
		id: 2,
		post_id: 1,
		user_id: 2,
		user_uid: "user2_uid",
		user_name: "Rudy",
		img_url:
			"https://media.istockphoto.com/id/1355110818/photo/studio-shot-of-a-handsome-and-happy-young-man-posing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=T39jUOOjC8H-Op0cfd-uiNXk1a2XBn1sXkQbKIWwY7E=",
		parent_comment_id: 2,
		content: "I agree!",
		created_at: "2024-08-23T13:03:45.925Z",
		updated_at: "2024-08-23T13:03:45.925Z",
	},
	{
		id: 6,
		post_id: 1,
		user_id: 3,
		user_uid: "user3_uid",
		user_name: "Elainy",
		img_url:
			"https://st3.depositphotos.com/1011434/13157/i/450/depositphotos_131572502-stock-photo-happy-woman-smiling.jpg",
		parent_comment_id: 2,
		content: "Glad to see you here!",
		created_at: "2024-08-23T13:03:45.925Z",
		updated_at: "2024-08-23T13:03:45.925Z",
	},
];

export default function Comment({ comment }) {
	const [isExpanded, setIsExpanded] = useState(false);
	const [showReplies, setShowReplies] = useState(false);
	const [showReplyForm, setShowReplyForm] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	const renderContent = () => {
		if (comment.content.length <= MAX_COMMENT_LENGTH) {
			return <p>{comment.content}</p>;
		}

		if (isExpanded) {
			return (
				<>
					<p>{comment.content}</p>
					<button
						onClick={toggleExpand}
						className="text-accent hover:underline mt-2"
					>
						Show less
					</button>
				</>
			);
		}

		return (
			<>
				<p>{comment.content.slice(0, MAX_COMMENT_LENGTH)}...</p>
				<button
					onClick={toggleExpand}
					className="text-accent hover:underline mt-2"
				>
					Show more
				</button>
			</>
		);
	};

	return (
		<li className="border-b border-light-grey p-4">
			<div className={comment.parent_comment_id ? "border-l-2 pl-4" : ""}>
				<div className="flex items-center gap-2 mb-2">
					<img
						className="w-10 h-10 rounded-full object-cover"
						src={comment.img_url}
						alt="photo of user"
					/>
					<div className="flex flex-col">
						<span>{comment.user_name}</span>
						<small className="opacity-50">{timeAgo(comment.created_at)}</small>
					</div>
				</div>
				<div className="mb-3">{renderContent()}</div>
				<div
					className={`flex  ${
						comment.replies_count > 0 ? "justify-between" : "justify-end"
					}`}
				>
					{comment.replies_count > 0 && (
						<button
							onClick={() => setShowReplies(!showReplies)}
							className="flex items-center gap-2"
						>
							<span class="material-symbols-outlined">chat_bubble</span>
							<span>
								{comment.replies_count}{" "}
								{showReplies ? "Hide replies" : "replies"}
							</span>
						</button>
					)}

					<button
						type="button"
						onClick={() => setShowReplyForm(!showReplyForm)}
					>
						Reply
					</button>
				</div>
				{showReplyForm && (
					<div className="border-l-2 pl-4">
						<CommentForm commentId={comment.id} />
					</div>
				)}
				{showReplies && (
					<ul className="ml-4 flex flex-col gap">
						{replies.map((reply) => (
							<Comment key={reply.id} comment={reply} />
						))}
					</ul>
				)}
			</div>
		</li>
	);
}
