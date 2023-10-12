'use client';
import React, { useState, useEffect, Suspense } from 'react';
import he from 'he';
import Link from 'next/link';
import apiService from '@/app/utils/service';
import Title from '@/components/01.Atoms/Title/title';
import Loader from '@/components/01.Atoms/Loader/loader';

import styles from './blog.module.scss'

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const data = await apiService.getPosts();
      const formattedPosts = data.map(post => ({
        id: post.id,
        title: he.decode(post.title.rendered),
        content: post.content.rendered,
        date: new Date(post.date).toLocaleDateString('en-US'),
      }));
      setPosts(formattedPosts);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.articles}>
      {!loading ? (
        posts.map(post => (
          <div className={styles.article} key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <Title type={'h3'}>{post.title}</Title>
              <div className={styles.articleDate}>{post.date}</div>
            </Link>
          </div>
        ))
      ) : (
        <Loader />
      )}
        
    </div>
  );
};

export default Blog;