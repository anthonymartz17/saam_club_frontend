const SAAM_API_URL = import.meta.env.VITE_SAAM_CLUB_API_URL;

export async function toggleLike(userId, postId) {
  try {
    const response = await fetch(`${SAAM_API_URL}/likes/post/${postId}/user/${userId}/toggleLike`, {
      method: 'POST',
    });
    if (!response.ok) {
      throw new Error('Failed to toggle like');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error toggling like for post with id ${postId} by user with id ${userId}:`, error);
    throw error;
  }
}
