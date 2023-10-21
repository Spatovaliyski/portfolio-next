import Image from 'next/image';
import apiService from '@/app/utils/service';
import Title from '@/components/01.Atoms/Title/title';
import SocialButton from '@/components/01.Atoms/Socials/social-button';
import Animate from '@/components/01.Atoms/MountTransition/fader';
import TechStack from '@/components/02.Organisms/Stack/tech-stack';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from '../../03.Molecules/ProjectsList/projects-list.module.scss';

async function getMedia(image) {
  const data = await apiService.getThumbnail(image);

  return {
    sizes: data.sizes,
    url: data.source_url,
  }
}

const ProjectItem = async ({ className, title, description, year, stack, link, image }) => {
  const thumbnail = await getMedia(image);

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

      {!!thumbnail && (
        <figure className={styles.projectBackground}>
          <Image fill={true} className={styles.background} src={thumbnail.url} alt="" />
        </figure>
      )}
    </div>
  )
};

export default ProjectItem;