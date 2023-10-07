import React from 'react';
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow';
import Blog from '@/components/05.Pages/BlogPosts/blog';

// Posts page component
const BlogPage = ({ posts }) => {
  return (
    <>
      <BackArrow href={'/'} />
      <Blog />
    </>
  );
};

export default BlogPage;