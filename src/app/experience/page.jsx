import { Suspense } from 'react';
import Loader from '@/components/01.Atoms/Loader/loader.component';
import Title from '@/components/01.Atoms/Title/title.component';
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow.component';
import ExperiencePosts from '@/components/05.Pages/ExperiencePosts/experience-posts.component';

export const metadata = {
  title: 'Experience | Martin Spatovaliyski',
}

/**
 * Renders the Experience page component.
 * @returns {JSX.Element} Experience page component
 */
const Experience = () => {
  return (
    <>
      <BackArrow href={'/'} />
      <Title type={'h1'}>Experience</Title>

      <Suspense fallback={<Loader />}><ExperiencePosts /></Suspense>
    </>
  )
}

export default Experience;