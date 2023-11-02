import React, { Suspense } from 'react'
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow';
import BlogPost from '@/components/05.Pages/BlogPost/post';
import Loader from '@/components/01.Atoms/Loader/loader';

const Post = ({ params: { id } }) => {
  return (
    <>
      <BackArrow href={'/blog'} />
      
      <Suspense fallback={<Loader />}><BlogPost postId={id} /></Suspense>
    </>
  )
};

export default Post;