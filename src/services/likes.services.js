const URL = import.meta.env.VITE_SAAM_CLUB_API_URL;

// Toggle like for a post
export const toggleLike = async (postId, userId, setIsLiked, isLiked) => {
  try {
    const response = await fetch(`/post/${postId}/user/${userId}/toggleLike`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      setIsLiked(!isLiked);
      console.log(data.message);
    } else {
      console.error(data.message);
    }
  } catch (error) {
    console.error("Error toggling like:", error);
  }
};
