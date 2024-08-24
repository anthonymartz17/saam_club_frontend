import React, { useState } from "react";
import { timeAgo } from "../utils/formatUtils";
import { usePostContext } from "../context/PostContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import "./Posts.css";

export default function Posts({ onSetIsOpen }) {
  const { posts, toggleLikeState, fetchTopLevelComments } = usePostContext();
  const { currentUser } = useAuth();
  const [expandedPostId, setExpandedPostId] = useState(null);
  const navigate = useNavigate();

  const handleExpandToggle = (id) => {
    setExpandedPostId(expandedPostId === id ? null : id);
  };

  const handleLikeClick = async (postId) => {
    if (!currentUser) {
      navigate("/auth/signup");
      return;
    }
    await toggleLikeState(1, postId, currentUser.accessToken);
  };

  const handleCommentClick = async (postId) => {
    onSetIsOpen(true);
    await fetchTopLevelComments(postId);
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
                <p
                  className="flex justify-center items-center cursor-pointer gap-1"
                  onClick={() => handleLikeClick(post.id)}
                >
                  <span className={`text-[18px] material-symbols-outlined`}>
                    favorite
                  </span>
                  {post.like_count}
                </p>
                <p
                  className="flex justify-center items-center cursor-pointer gap-1"
                  onClick={() => handleCommentClick(post.id)}
                >
                  <span className="text-[18px] material-symbols-outlined">
                    chat_bubble
                  </span>
                  {post.comment_count}
                </p>
                <p>
                  <span className="text-[18px] material-symbols-outlined">
                    cached
                  </span>
                </p>
                <p>
                  <span className="text-[18px] material-symbols-outlined">
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
