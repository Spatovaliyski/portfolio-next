'use client'
import React, { useEffect, useState } from 'react'
import he from 'he';
import apiService from '@/app/utils/service';
import Loader from '@/components/01.Atoms/Loader/loader';
import Title from '@/components/01.Atoms/Title/title';

import styles from './../BlogPosts/blog.module.scss'

const BlogPost = (id) => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      const data = await apiService.getPost(id.id);

      const formattedPost = {
        id: data.id,
        title: he.decode(data.title.rendered),
        content: data.content.rendered,
        date: new Date(data.date).toLocaleDateString('en-GB'),
      };

      setPost(formattedPost);
      setLoading(false);
    };

    fetchData();
  }, []);


  return (
    <>
      {!loading ? (
        post && (
        <div className={styles.article}>
          <Title type={'h1'}>{post.title}</Title>
          <div className={styles.articleDate}>{post.date}</div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        )
      ) : (
        <Loader />
      )}
    </>
  )
};

export default BlogPost;