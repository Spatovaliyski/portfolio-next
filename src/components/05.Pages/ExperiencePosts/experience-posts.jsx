import Animate from '@/components/01.Atoms/MountTransition/fader';
import ListItem from '@/components/01.Atoms/List/list-item';
import ListWithProgress from '@/components/02.Organisms/List/list-with-progress';
import apiService from '@/app/utils/service';
import he from 'he';

async function getData() {
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

const ExperiencePosts = async () => {
  const posts = await getData();
  const loading = false;

  return (
    <ListWithProgress>
      {posts && posts.map((post, index) => (
        <Animate key={index} delay={index * 10}>
          <ListItem
            className
            start={post.startYear}
            finish={post.endYear}
            employer={post.title}
            type={post.location}
            position={post.position}
            description={post.content}
          />
        </Animate>
      ))}
    </ListWithProgress>
  )
}

export default ExperiencePosts;