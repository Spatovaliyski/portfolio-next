
import apiService from "../utils/service";
import he from 'he';

export default async function getProjectsList() {
  const data = await apiService.getProjects();
  const formattedPosts = data.map(post => ({
    id: post.id,
    title: he.decode(post.title.rendered),
    content: post.the_content,
    tags: post.tags,
    repository: post.repository,
    endYear: post.end_year,
    thumbnailId: post.featured_media,
  }));

  return formattedPosts;
}