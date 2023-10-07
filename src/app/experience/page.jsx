import React from 'react';

import Animate from '@/components/01.Atoms/MountTransition/fader';
import ListItem from '@/components/01.Atoms/List/list-item';
import Title from '@/components/01.Atoms/Title/title';
import BackArrow from '@/components/01.Atoms/BackArrow/back-arrow';
import ListWithProgress from '@/components/02.Organisms/List/list-with-progress';

const Experience = () => {
  return (
    <>
      <BackArrow href={'/'} />
      <Title type={'h2'}>Experience</Title>
      <ListWithProgress>
        <Animate delay={0}>
          <ListItem
            className
            start={'12.2022'}
            finish={'10.2023'}
            employer={'Almacena Platform'}
            type={'Remote'}
            position={'Sr. Front-End Developer'}
            description={'Revamped web tools, pages, and the marketplace with a keen eye for visual enhancement. Took ownership of several internal tools and public-listed website, making creative decisions to elevate its overall appeal, ensuring a seamless and engaging user experience.'}
          />
        </Animate>

        <Animate delay={20}>
          <ListItem
            start={'07.2021'}
            finish={'11.2022'}
            employer={'Freelance / Client'}
            type={'Remote'}
            position={'Full-stack / Product Owner'}
            description={'I successfully integrated a well-established platform into WordPress, overseeing the seamless migration of content, user data, and media. I crafted custom templates and plugins to deliver a distinctive user experience, complemented by refined Locomotive and GSAP animations. Additionally, I implemented robust user management, authentication, and content moderation for a secure and professional WordPress environment.'}
          />
        </Animate>

        <Animate delay={30}>
          <ListItem
            start={'05.2017'}
            finish={'06.2021'}
            employer={'DevriX'}
            type={'Hybrid'}
            position={'Front-end Developer'}
            description={'Led the end-to-end development and maintenance of projects, adhering to rigorous standards. Applied creative problem-solving through thoughtful theorycrafting, coordinating seamlessly with clients and cross-functional teams. Mentored and developed front-end teams, expertly crafting interfaces, internal tools, themes, and plugins, all while collaborating asynchronously with Project Managers for effective planning and project upkeep.'}
          />
        </Animate>

      </ListWithProgress>
    </>
  )
}

export default Experience;