import { API_ROOT, API_USER, API_MEDIA, API_POSTS } from "./config";

const apiService = {
  getPosts: async function () {
    try {
      const res = await fetch(`${API_ROOT}/posts`);
      const posts = await res.json();
      return posts;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return null;
    }
  },

  getPost: async function (id) {
    try {
      const res = await fetch(`${API_ROOT}/posts/${id}`);
      const posts = await res.json();
      return posts;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return null;
    }
  },
};

export default apiService;