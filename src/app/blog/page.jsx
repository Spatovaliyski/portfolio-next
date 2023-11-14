import React, { Suspense } from 'react';
import Loader from '@/components/01.Atoms/Loader/loader';
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow';
import Title from '@/components/01.Atoms/Title/title';
import Blog from '@/components/05.Pages/BlogPosts/blog';

/**
 * Renders the Blog page component.
 * @param {Object} props - The component props.
 * @param {Array} props.posts - The array of blog posts.
 * @returns {JSX.Element} - The rendered component.
 */
const BlogPage = ({ posts }) => {
	return (
		<>
			<BackArrow href={'/'} />
			<Title type={'h1'}>Blog</Title>
			
			<Suspense fallback={<Loader />}><Blog /></Suspense>
		</>
	);
};

export default BlogPage;