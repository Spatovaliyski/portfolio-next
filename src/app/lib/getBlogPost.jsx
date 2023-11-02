import apiService from "../utils/service";
import he from 'he';

export default async function getBlogPost(id) {
  const data = await apiService.getPost(id);

  const formattedPost = {
    id: data.id,
    title: he.decode(data.title.rendered),
    content: data.content.rendered,
    date: new Date(data.date).toLocaleDateString('en-GB'),
  };

  return formattedPost;
}