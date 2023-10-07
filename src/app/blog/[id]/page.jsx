'use client'
import React, { useEffect, useState } from 'react'
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow';
import BlogPost from '@/components/05.Pages/BlogPost/post';

const Post = ({params}) => {
  return (
    <>
      <BackArrow href={'/blog'} />
      <BlogPost id={params.id} />
    </>
  )
};

export default Post;