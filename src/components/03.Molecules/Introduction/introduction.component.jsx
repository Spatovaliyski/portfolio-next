import getGeneralData from '@/app/lib/getGeneralData';
import HeadingWithText from '@/components/02.Organisms/Heading/heading-with-text.component';
import React from 'react'

/**
 * Renders the Information page's introduction, the first thing the user sees.
 * 
 * @returns {JSX.Element} The introduction component.
 */
const Introduction = async () => {
	const generalData = await getGeneralData();

	const [data] = await Promise.all([generalData]);

	return (
		<HeadingWithText
			title={`Heya,\n I'm Martin Spatovaliyski`}
			subtitle={'Front-end developer for over 6 Years,\n WordPress, React & Next.js enthusiast, UI/UX Engineer'}
			description={data.description}
		/>
	)
}

export default Introduction