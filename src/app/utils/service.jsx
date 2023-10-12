import { API_ROOT, API_MEDIA, API_POSTS, API_EXPERIENCE, API_PROJECTS } from "./config";

const fetchData = async (endpoint) => {
  try {
    const res = await fetch(`${API_ROOT}/${endpoint}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching data for ${endpoint}:`, error);
    return null;
  }
};

const apiService = {
  getPosts: async () => fetchData(API_POSTS),

  getPost: async (id) => fetchData(`${API_POSTS}/${id}`),

  getWorkExperience: async () => fetchData(API_EXPERIENCE),

  getProjects: async () => fetchData(API_PROJECTS),

  getThumbnail: async (id) => fetchData(`${API_MEDIA}/${id}`),
};

export default apiService;
