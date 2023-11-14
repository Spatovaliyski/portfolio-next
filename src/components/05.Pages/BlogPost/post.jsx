import getBlogPost from '@/app/lib/getBlogPost';
import Title from '@/components/01.Atoms/Title/title';

import styles from './../BlogPosts/blog.module.scss'

/**
 * Renders a blog post with the given postId.
 *
 * @async
 * @param {Object} props - The component props.
 * @param {string} props.postId - The ID of the blog post to render.
 * @returns {JSX.Element} - The rendered blog post.
 */
const BlogPost = async ({ postId }) => {
  const blogPost = await getBlogPost(postId);

  const [post] = await Promise.all([blogPost]);

  return (
    <div className={styles.article}>
      <Title type={'h1'}>{post.title}</Title>
      <div className={styles.articleDate}>{post.date}</div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
};

export default BlogPost;