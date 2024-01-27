import React, { Suspense } from 'react'
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow.component';
import Title from '@/components/01.Atoms/Title/title.component';
import ProjectsList from '@/components/03.Molecules/ProjectsList/projects-list.component';
import Loader from '@/components/01.Atoms/Loader/loader.component';

export const metadata = {
  title: 'Projects | Martin Spatovaliyski',
}

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