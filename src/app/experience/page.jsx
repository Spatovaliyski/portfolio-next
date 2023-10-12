import Title from '@/components/01.Atoms/Title/title';
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow';
import ExperiencePosts from '@/components/05.Pages/ExperiencePosts/experience-posts';

const Experience = () => {
  return (
    <>
      <BackArrow href={'/'} />
      <Title type={'h1'}>Experience</Title>

      <ExperiencePosts />
    </>
  )
}

export default Experience;