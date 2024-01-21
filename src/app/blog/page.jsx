import React, { Suspense } from 'react';
import Loader from '@/components/01.Atoms/Loader/loader.component';
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow.component';
import Title from '@/components/01.Atoms/Title/title.component';
import Blog from '@/components/05.Pages/BlogPosts/blog.component';

/**
 * Renders the Blog page component.
 * @param {Object} props - The component props.
 * @param {Array} props.posts - The array of blog posts.
 * @returns {JSX.Element} - The rendered component.
 */
const BlogPage = () => {
	return (
		<>
			<BackArrow href={'/'} />
			<Title type={'h1'}>Blog</Title>
			
			<Suspense fallback={<Loader />}><Blog /></Suspense>
		</>
	);
};

export default BlogPage;