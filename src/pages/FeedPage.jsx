import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PostContextProvider from "../context/PostContext";
import { useState } from "react";
import Comments from "../components/Comments";
import Posts from "../components/Posts";

export default function FeedPage() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<PostContextProvider>
			<div>
				<Posts isOpen={isOpen} onSetIsOpen={setIsOpen} />
				<Comments isOpen={isOpen} onSetIsOpen={setIsOpen} />
			</div>
		</PostContextProvider>
	);
}
