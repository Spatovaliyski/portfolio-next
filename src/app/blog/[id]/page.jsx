import React, { Suspense } from 'react'
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow';
import BlogPost from '@/components/05.Pages/BlogPost/post';
import Loader from '@/components/01.Atoms/Loader/loader';

/**
 * Renders a blog post page with a back arrow and a blog post component.
 * @param {Object} props - The component props.
 * @param {Object} props.params - The route parameters.
 * @param {string} props.params.id - The ID of the blog post to display.
 * @returns {JSX.Element} - The rendered component.
 */
const Post = ({ params: { id } }) => {
	return (
		<>
			<BackArrow href={'/blog'} />
			
			<Suspense fallback={<Loader />}><BlogPost postId={id} /></Suspense>
		</>
	)
};

export default Post;