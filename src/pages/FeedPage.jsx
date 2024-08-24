import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PostContextProvider from "../context/PostContext";
import { useState } from "react";
import Comments from "../components/Comments";
export default function FeedPage() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<PostContextProvider>
			<div>
				<div className="w-5">
					<button className="btn btn_accent" onClick={() => setIsOpen(true)}>
						comments
					</button>
				</div>
				<Comments isOpen={isOpen} onSetIsOpen={setIsOpen} />
			</div>
		</PostContextProvider>
	);
}
