import apiService from "../utils/service";
import useFormattedDate from "@/hooks/useFormattedDate";
import he from 'he';

/**
 * Retrieves a blog post from the API and formats it for display.
 * @async
 * @function
 * @param {number} id - The ID of the blog post to retrieve.
 * @returns {Promise<Object>} - A Promise that resolves to an object containing the formatted blog post data.
 * @throws {Error} - If the API request fails or the response is not in the expected format.
 */
export default async function getBlogPost(id) {
  const data = await apiService.getPost(id);

  const formattedPost = {
    id: data.id,
    title: he.decode(data.title.rendered),
    content: data.content.rendered,
    date: useFormattedDate(data.date)
  };

  return formattedPost;
}