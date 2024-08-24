import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PostContextProvider from "../context/PostContext";
import { useState } from "react";
import Comments from "../components/Comments";
import Posts from "../components/Posts";
import CommentButton from "../components/CommentButton";
export default function FeedPage() {
	const [isOpen, setIsOpen] = useState(false);
	const [postId, setPostId] = useState(null);
	return (
		<PostContextProvider>
			<div>
				<CommentButton />
				<Posts isOpen={isOpen} onSetIsOpen={setIsOpen} setPostId={setPostId} />
				<Comments isOpen={isOpen} onSetIsOpen={setIsOpen} postId={postId} />
			</div>
		</PostContextProvider>
	);
}
