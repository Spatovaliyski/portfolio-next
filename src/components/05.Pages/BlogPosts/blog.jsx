import Link from 'next/link';
import getBlogPosts from '@/app/lib/getBlogPosts';
import Title from '@/components/01.Atoms/Title/title';

import styles from './blog.module.scss'

/**
 * Renders a list of blog posts.
 * @returns {JSX.Element} The Blog component
 */
const Blog = async () => {
	const blogPosts = await getBlogPosts();

	const [posts] = await Promise.all([blogPosts]);
	
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