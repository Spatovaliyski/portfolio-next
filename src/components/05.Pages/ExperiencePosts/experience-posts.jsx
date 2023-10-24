import getExperiencePosts from '@/app/lib/getExperiencePosts';
import Animate from '@/components/01.Atoms/MountTransition/fader';
import ListItem from '@/components/01.Atoms/List/list-item';
import ListWithProgress from '@/components/02.Organisms/List/list-with-progress';

const ExperiencePosts = async () => {
  const experiencePosts = await getExperiencePosts();

  const [posts] = await Promise.all([experiencePosts]);

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