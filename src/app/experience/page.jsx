import { Suspense } from 'react';
import Loader from '@/components/01.Atoms/Loader/loader';
import Title from '@/components/01.Atoms/Title/title';
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow';
import ExperiencePosts from '@/components/05.Pages/ExperiencePosts/experience-posts';

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