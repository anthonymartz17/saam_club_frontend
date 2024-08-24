import { useState } from "react";

export default function CommentForm({ commentId }) {
	const [comment, setComment] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [commentError, setCommentError] = useState("");

	function handdleSubmit(e) {
		e.preventDefault();
	}
	return (
		<div className="shadow-darkshadow p-2 my-4 rounded-md">
			{!commentId && (
				<div className="flex items-center  gap-2">
					<img
						className="w-14 h-14 rounded-full object-cover"
						src={
							"https://t3.ftcdn.net/jpg/03/62/50/16/360_F_362501638_FimxwTbbGUoRtjaypXDPGAyYCFvfvYy0.jpg" ||
							"https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg"
						}
						alt=""
					/>
					<p>User@name</p>
				</div>
			)}
			<form className="py-2" onSubmit={handdleSubmit}>
				<textarea
					className="w-full outline-none resize-none "
					name="comment"
					cols="30"
					rows="5"
					id="comment"
					type="text"
					placeholder="What's on your mind?"
				></textarea>
				<div className="flex justify-end">
					<div>
						<button className="btn btn_accent">Post</button>
					</div>
				</div>
			</form>
		</div>
	);
}
