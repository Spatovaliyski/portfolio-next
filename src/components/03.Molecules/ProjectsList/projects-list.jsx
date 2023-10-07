import ProjectItem from '@/components/02.Organisms/Project/project-item';
import Animate from '@/components/01.Atoms/MountTransition/fader';

import styles from './projects-list.module.scss'

const ProjectsList = () => {
  return (
    <div className={styles.projectsList}>
      <Animate delay={0}>
        <ProjectItem
          className={''}
          title={'Portfolio v2.0 (Next)'}
          year={2023}
          description={`A whole new version of my Portfolio, going away from the edgy phase to simplify the visuals. As per usual, my repository is all open`}
          link={''}
          stack={['NextJS', 'WordPress', 'PHP', 'JavaScript', 'JSX']}
          image={'http://wp.spatovaliyski.com/wp-content/uploads/2023/10/chrome_3vllRsxMxV.png'}
        />
      </Animate>


      <Animate delay={10}>
        <ProjectItem
          className={''}
          title={'Portfolio v1.0 (React)'}
          year={2022}
          description={`Upgraded, GreenSock'd, reactified (although there's not a lot of content to react to the user input yet). This is a close recreation of the personal _s WordPress theme prior to this project`}
          stack={['React', 'SCSS', 'JS', 'GSAP']}
          link={'https://github.com/Spatovaliyski/portfolio-react'}
          image={'http://wp.spatovaliyski.com/wp-content/uploads/2023/10/chrome_NI4DZVqn4B.png'}
        />
      </Animate>


      <Animate delay={20}>
        <ProjectItem
          className={''}
          title={'Portfolio v1.0 (WordPress)'}
          year={2021}
          description={`A quick mockup of a barebones WordPress install with some design work. I stopped working on it to focus on the React version instead`}
          stack={['SCSS', 'PHP', 'MySQL', 'jQuery', 'Gulp', 'Headroom.js', 'WordPress']}
          link={'https://github.com/Spatovaliyski/portfolio'}
          image={'https://wp.spatovaliyski.com/wp-content/uploads/2022/10/chrome_oKHPxdr4zL.png'}
        />     
      </Animate>


      <Animate delay={30}>
        <ProjectItem
          className={''}
          title={`"Granny Goes Deep"`}
          year={2021}
          description={`A noteworthy playable project to say the least! This was a team Game Jam to create a game in under 5 days. I took part in Interface Development, Tooltips, End screen messages, and more!`}
          stack={['Unity', 'UI / UX', 'C#', 'Photoshop']}
          link={'https://ldjam.com/events/ludum-dare/48/granny-goes-deep'}
          image={'https://wp.spatovaliyski.com/wp-content/uploads/2022/10/CaqWzGe.png'}
        />  
      </Animate>


      <Animate delay={40}>
        <ProjectItem
          className={''}
          title={'SCII Panel'}
          year={2020}
          description={`This panel was created as a small doodle. The intention here was to keep very close approach to the game Starcraft II's awards tab.`}
          stack={['PHP', 'SCSS', 'jQuery', 'Gulp']}
          link={'https://github.com/Spatovaliyski/sc2-webui'}
          image={'https://wp.spatovaliyski.com/wp-content/uploads/2022/10/chrome_hC77g9HnVT.png'}
        /> 
      </Animate>


      <Animate delay={50}>
        <ProjectItem
          className={''}
          title={'League of Legends - Beta Launcher HTML5 Challenge'}
          year={2019}
          description={`League of Legends was about to update its launcher so I decided to create a mockup web version of their prototype image source`}
          stack={['jQuery', 'SCSS', 'Gulp']}
          link={'https://github.com/Spatovaliyski/LeagueWeb'}
          image={'https://wp.spatovaliyski.com/wp-content/uploads/2022/10/chrome_qEbCacuGel.png'}
        />
      </Animate>

    </div>
  )
};

export default ProjectsList;