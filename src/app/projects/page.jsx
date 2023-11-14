import React, { Suspense } from 'react'
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow';
import Title from '@/components/01.Atoms/Title/title';
import ProjectsList from '@/components/03.Molecules/ProjectsList/projects-list';
import Loader from '@/components/01.Atoms/Loader/loader';

/**
 * Renders the Portfolio page with a BackArrow, a Title and a ProjectsList component.
 * @returns {JSX.Element} The Portfolio page UI.
 */
const Portfolio = () => {
	return (
		<>
			<BackArrow href={'/'} />
			<Title type={'h1'}>Projects</Title>

			<Suspense fallback={<Loader />}><ProjectsList /></Suspense>
		</>
	)
}

export default Portfolio;