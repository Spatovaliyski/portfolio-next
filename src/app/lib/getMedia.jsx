import apiService from "../utils/service";

/**
 * Retrieves media data from the API service.
 * @async
 * @function
 * @param {number} id - The ID of the media to retrieve.
 * @returns {Promise<{sizes: Array, url: string}>} - An object containing the sizes and URL of the media.
 */
export default async function getMedia(id) {
	const data = await apiService.getThumbnail(id);

	return {
		sizes: data.sizes,
		url: data.source_url,
	}
}