import Title from '@/components/01.Atoms/Title/title';
import SocialButton from '@/components/01.Atoms/Socials/social-button';
import TechStack from '@/components/02.Organisms/Stack/tech-stack';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Animate from '@/components/01.Atoms/MountTransition/fader';

import styles from '../../03.Molecules/ProjectsList/projects-list.module.scss';

const ProjectItem = ({ className, title, description, year, stack, link, image }) => {
  return (
    <div className={`${styles.projectItem} ${className}`}>
      <div className={styles.wrapper}>
        <Animate delay={10}>
        <div className={styles.heading}>
          <Title type={'h4'}>{title}</Title>
          <p className={styles.dateOfCreation}>
            <SocialButton
              width={20}
              link={link || ""}
              icon={faGithub}
            >
            {year}
            </SocialButton>
          </p>
        </div>
        </Animate>


        <div className={styles.content}>
          <Animate delay={30}>
            <p className={styles.description}>{description}</p>
          </Animate>
          
          <Animate delay={40}>
            <TechStack className={''} items={stack} />
          </Animate>
        </div>
      </div>
      
      <figure className={styles.projectBackground}>
        <Image fill={true} className={styles.background} src={image} alt="" />
      </figure>
    </div>
  )
};

export default ProjectItem;