'use client';
import { useEffect, useState } from 'react';
import Loader from '@/components/01.Atoms/Loader/loader';
import Animate from '@/components/01.Atoms/MountTransition/fader';
import ListItem from '@/components/01.Atoms/List/list-item';
import Title from '@/components/01.Atoms/Title/title';
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow';
import ListWithProgress from '@/components/02.Organisms/List/list-with-progress';
import apiService from '@/app/utils/service';
import he from 'he';

const ExperiencePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
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
      setPosts(formattedPosts);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {!loading ? (
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
        ) : (
          <Loader />
        )}
    </>
  )
}

export default ExperiencePosts;