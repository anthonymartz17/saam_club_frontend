const URL = import.meta.env.VITE_SAAM_CLUB_API_URL;

// Get all posts
export async function getPosts() {
  const response = await fetch(`${URL}/posts`);
  const data = await response.json();
  return data;
}
