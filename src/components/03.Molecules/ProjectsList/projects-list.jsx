import getProjectsList from '@/app/lib/getProjects';
import Animate from '@/components/01.Atoms/MountTransition/fader';
import ProjectItem from '@/components/02.Organisms/Project/project-item';

import styles from './projects-list.module.scss'

/**
 * Renders a list of projects fetched from the server.
 * @returns {JSX.Element} The ProjectsList component
 */
const ProjectsList = async () => {
  const projectsList = await getProjectsList();

  const [posts] = await Promise.all([projectsList]);

  return (
    <div className={styles.projectsList}>
      {posts && posts.map((post, index) => (
        <Animate key={index} delay={index * 10}>
          <ProjectItem
            className={''}
            title={post.title}
            year={post.endYear}
            description={post.content}
            link={post.repository}
            stack={post.tags}
            image={post.thumbnailId}
          />
        </Animate>
      ))}
    </div>
  )
};

export default ProjectsList;