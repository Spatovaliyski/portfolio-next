import Link from 'next/link';
import getBlogPosts from '@/app/lib/getBlogPosts';
import Title from '@/components/01.Atoms/Title/title.component';

import styles from './blog.module.scss'
import Animate from '@/components/01.Atoms/MountTransition/fader.component';

/**
 * Renders a list of blog posts.
 * @returns {JSX.Element} The Blog component
 */
const Blog = async () => {
  const blogPosts = await getBlogPosts();

  const [posts] = await Promise.all([blogPosts]);
  
  return (
    <div className={styles.articles}>
      {posts.map((post, index) => (
        <Animate key={post.id} delay={index * 10}>
          <article className={styles.blogPost} key={post.id}>
            <Link href={`/blog/${post.id}`} className={styles.blogPostLink}>
              <Title type={'h3'}>{post.title}</Title>
              <div className={styles.articleDate}>{post.date}</div>
            </Link>
          </article>
        </Animate>
      ))}
    </div>
  );
};

export default Blog;