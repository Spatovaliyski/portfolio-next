import React from 'react';
import Animate from '@/components/01.Atoms/MountTransition/fader.component';
import SocialButton from '@/components/01.Atoms/Socials/social-button.component';
import HeadingWithText from '@/components/02.Organisms/Heading/heading-with-text.component';

import { PiLinkedinLogoThin, PiGithubLogoThin  } from "react-icons/pi";
import { CiMail } from "react-icons/ci";

import styles from './page.module.scss';
import EmploymentStatus from '@/components/03.Molecules/EmploymentStatus/employment-status.component';
import Introduction from '@/components/03.Molecules/Introduction/introduction.component';

export default function Home() {
  return (
		<div>
			<EmploymentStatus isLookingForWork={true} />

			<Introduction />

			<div className={styles.socials}>
				<Animate delay={20}>
					<SocialButton
						link={'https://linkedin.com/in/martin-spatovaliyski/'}
						external={true}
						width={24}
						icon={<PiLinkedinLogoThin />}
					/>
				</Animate>

				<Animate delay={30}>
					<SocialButton
						link={'https://github.com/Spatovaliyski'}
						external={true}
						width={24}
						buttonColor={'var(--color-github-icon)'}
						icon={<PiGithubLogoThin />}
					/>
				</Animate>

				<Animate delay={40}>
					<SocialButton
						link={'mailto:martinspatovaliyski@gmail.com'}
						external={true}
						buttonColor={'var(--color-mailto-icon)'}
						icon={<CiMail />}
					/>
				</Animate>
				
      </div>
    </div>
  )
};