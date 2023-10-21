import React, { Suspense } from 'react'
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow';
import BlogPost from '@/components/05.Pages/BlogPost/post';
import Loader from '@/components/01.Atoms/Loader/loader';

const Post = ({ params }) => {
  const postId = params.id

  return (
    <>
      <BackArrow href={'/blog'} />
      
      <Suspense fallback={<Loader />}><BlogPost postId={postId} /></Suspense>
    </>
  )
};

export default Post;