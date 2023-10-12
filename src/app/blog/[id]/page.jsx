'use client'
import React, { useEffect, useState } from 'react'
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow';
import BlogPost from '@/components/05.Pages/BlogPost/post';

const Post = ({ params }) => {
  const postId = params.id

  return (
    <>
      <BackArrow href={'/blog'} />
      <BlogPost postId={postId} />
    </>
  )
};

export default Post;