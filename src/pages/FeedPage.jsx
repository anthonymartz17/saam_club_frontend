import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import Comments from "../components/Comments";
export default function FeedPage() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<div className="w-5">
				<button
					className="btn btn_accent"
					onClick={() => setIsOpen(true)}
				>
					comments
				</button>
			</div>
			<Comments isOpen={isOpen} onSetIsOpen={setIsOpen} />
		</div>
	);
}
