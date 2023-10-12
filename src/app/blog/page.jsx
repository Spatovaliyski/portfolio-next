import React from 'react';
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow';
import Title from '@/components/01.Atoms/Title/title';
import Blog from '@/components/05.Pages/BlogPosts/blog';

// Posts page component
const BlogPage = ({ posts }) => {
  return (
    <>
      <BackArrow href={'/'} />
      <Title type={'h1'}>Blog</Title>
      <Blog />
    </>
  );
};

export default BlogPage;