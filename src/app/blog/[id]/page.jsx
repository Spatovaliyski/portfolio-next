import React from 'react'
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow';
import Title from '@/components/01.Atoms/Title/title';

const BlogPage = ({ params }) => {
  return (
    <>
      <BackArrow href={'/blog'} />
      <Title type={'h2'}>Blog</Title>

      <>WIP but this is the ID: {params.id}</>
    </>
  )
};

export default BlogPage;