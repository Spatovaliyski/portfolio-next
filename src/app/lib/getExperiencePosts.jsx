import apiService from "../utils/service";
import he from 'he';

export default async function getExperience() {
  const data = await apiService.getWorkExperience();
  const formattedPosts = data.map(post => ({
    id: post.id,
    title: he.decode(post.title.rendered),
    content: post.the_content,
    location: post.location,
    position: post.company_position,
    startYear: post.start_year,
    endYear: post.end_year,
  }));

  return formattedPosts;
}