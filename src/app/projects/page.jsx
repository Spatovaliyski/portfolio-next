import React from 'react'
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow';
import Title from '@/components/01.Atoms/Title/title';
import ProjectsList from '@/components/03.Molecules/ProjectsList/projects-list';

const Portfolio = () => {
  return (
    <>
      <BackArrow href={'/'} />
      <Title type={'h2'}>Projects</Title>

      <ProjectsList />
    </>
  )
}

export default Portfolio;