import getExperiencePosts from '@/app/lib/getExperiencePosts';
import Animate from '@/components/01.Atoms/MountTransition/fader.component';
import ListItem from '@/components/01.Atoms/List/list-item.component';
import ListWithProgress from '@/components/02.Organisms/List/list-with-progress.component';

/**
 * Renders a list of experience posts.
 * @returns {JSX.Element} ExperiencePosts component.
 */
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