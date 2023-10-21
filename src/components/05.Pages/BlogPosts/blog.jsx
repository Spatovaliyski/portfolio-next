import he from 'he';
import Link from 'next/link';
import apiService from '@/app/utils/service';
import Title from '@/components/01.Atoms/Title/title';

import styles from './blog.module.scss'
 
async function getPosts() {
  const data = await apiService.getPosts();
  const formattedPosts = data.map(post => ({
    id: post.id,
    title: he.decode(post.title.rendered),
    content: post.content.rendered,
    date: new Date(post.date).toLocaleDateString('en-US'),
  }));

  return formattedPosts;
}

const Blog = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.articles}>
      {posts.map(post => (
        <div className={styles.article} key={post.id}>
          <Link href={`/blog/${post.id}`}>
            <Title type={'h3'}>{post.title}</Title>
            <div className={styles.articleDate}>{post.date}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;