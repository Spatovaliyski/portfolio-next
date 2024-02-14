import { Suspense } from 'react'
import getBlogPost from '@/app/lib/getBlogPost';
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow.component';
import BlogPost from '@/components/05.Pages/BlogPost/post.component';
import Loader from '@/components/01.Atoms/Loader/loader.component';

/**
 * Renders a blog post page with a back arrow and a blog post component.
 * @param {Object} props - The component props.
 * @param {Object} props.params - The route parameters.
 * @param {string} props.params.id - The ID of the blog post to display.
 * @returns {JSX.Element} - The rendered component.
 */

const Post = async ({ params: { id } }) => {
  const [post] = await Promise.all([getBlogPost(id)]);

  return (
    <>
      <BackArrow href={'/blog'} />
      
      <Suspense fallback={<Loader />}><BlogPost post={post} /></Suspense>
    </>
  )
};
export default Post;

/** 
 * Generates the metadata for the blog post page.
 * 
 * @async 
 * @param {Object} props - The component props.
 * @param {Object} props.params - The route parameters.
 * @param {string} props.params.id - The ID of the blog post to display.
 * 
 * @returns {Object} - The metadata for the blog post page.
 */
export async function generateMetadata({ params }) {
  const [post] = await Promise.all([getBlogPost(params.id)]);

  return {
    title: post.title,
    description: post.description,
  }
}