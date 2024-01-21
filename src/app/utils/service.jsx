import { API_ROOT, API_MEDIA, API_POSTS, API_EXPERIENCE, API_PROJECTS } from "./config";

/**
 * Fetches data from the API endpoint.
 * @param {string} endpoint - The API endpoint to fetch data from.
 * @returns {Promise} - A Promise that resolves to the fetched data or null if an error occurs.
 */
const fetchData = async (endpoint) => {
	try {
		const res = await fetch(`${API_ROOT}/${endpoint}`, {
			next: { revalidate: 60 },
		});
		const data = await res.json();
		return data;
	} catch (error) {
		console.error(`Error fetching data for ${endpoint}:`, error);
		return null;
	}
};

/**
 * Object containing methods to fetch data from the API.
 * @typedef {Object} apiService
 * @property {Function} getPosts - Method to fetch all posts.
 * @property {Function} getPost - Method to fetch a single post by ID.
 * @property {Function} getWorkExperience - Method to fetch work experience data.
 * @property {Function} getProjects - Method to fetch all projects.
 * @property {Function} getThumbnail - Method to fetch a thumbnail by ID.
 */
const apiService = {
	getPosts: async () => fetchData(API_POSTS),

	getPost: async (id) => fetchData(`${API_POSTS}/${id}`),

	getWorkExperience: async () => fetchData(API_EXPERIENCE),

	getProjects: async () => fetchData(API_PROJECTS),

	getThumbnail: async (id) => fetchData(`${API_MEDIA}/${id}`),
};

export default apiService;
