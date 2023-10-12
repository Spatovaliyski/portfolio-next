'use client'
import { useEffect, useState } from 'react';
import apiService from '@/app/utils/service';
import Animate from '@/components/01.Atoms/MountTransition/fader';
import ProjectItem from '@/components/02.Organisms/Project/project-item';
import he from 'he';

import styles from './projects-list.module.scss'

const ProjectsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
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
      setPosts(formattedPosts);
      setLoading(false);
    };

    fetchData();
  }, []);

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