import React from 'react';
import Animate from '@/components/01.Atoms/MountTransition/fader';
import SocialButton from '@/components/01.Atoms/Socials/social-button';
import HeadingWithText from '@/components/02.Organisms/Heading/heading-with-text';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div>
      <HeadingWithText
        title={`Heya,\n I'm Martin Spatovaliyski`}
        subtitle={'Front-end developer for over 6 Years,\n React & WordPress enthusiast, UI/UX Engineer'}
        description={`Started with "WYSIWYG Web builder" in 2007-2008, now I'm here! Born and living in Bulgaria, Owning a Master's in CS (Graphical Interfaces), and having developed multiple successful projects, my professional career stretches 6+ years, owning products and being an end-to-end partner during the entire process of each project`}
      />

      <div className={styles.socials}>
        <Animate delay={20}>
          <SocialButton
            link={'https://linkedin.com/in/martin-spatovaliyski/'}
            external={true}
            width={24}
            buttonColor={'#0077b5'}
            icon={faLinkedin}
          />
        </Animate>

        <Animate delay={30}>
          <SocialButton
            link={'https://github.com/Spatovaliyski'}
            external={true}
            width={24}
            buttonColor={'var(--color-github-icon)'}
            icon={faGithub}
          />
        </Animate>

        <Animate delay={40}>
          <SocialButton
            link={'mailto:martinspatovaliyski@gmail.com'}
            external={true}
            width={24}
            buttonColor={'var(--color-mailto-icon)'}
            icon={faEnvelopeOpenText}
          />
        </Animate>
      </div>
    </div>
  )
};