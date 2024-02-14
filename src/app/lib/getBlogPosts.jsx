import apiService from "../utils/service";
import he from 'he';

/**
 * Retrieves blog posts from the API and formats them.
 *
 * @returns {Promise<Array<{id: number, title: string, content: string, date: string}>>} An array of blog posts with formatted data.
 */
export default async function getBlogPosts() {
  const data = await apiService.getPosts();
  const formattedPosts = data.map(post => ({
    id: post.id,
    title: he.decode(post.title.rendered),
    content: post.content.rendered,
    date: new Date(post.date).toLocaleDateString('en-US'),
  }));

  return formattedPosts;
}