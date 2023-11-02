import React, { Suspense } from 'react';
import Loader from '@/components/01.Atoms/Loader/loader';
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow';
import Title from '@/components/01.Atoms/Title/title';
import Blog from '@/components/05.Pages/BlogPosts/blog';

// Blog posts PAGE
const BlogPage = ({ posts }) => {
  return (
    <>
      <BackArrow href={'/'} />
      <Title type={'h1'}>Blog</Title>
      
      <Suspense fallback={<Loader />}><Blog /></Suspense>
    </>
  );
};

export default BlogPage;