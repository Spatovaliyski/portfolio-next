import Image from 'next/image';
import Title from '@/components/01.Atoms/Title/title.component';
import SocialButton from '@/components/01.Atoms/Socials/social-button.component';
import Animate from '@/components/01.Atoms/MountTransition/fader.component';
import TechStack from '@/components/02.Organisms/Stack/tech-stack.component';

import getMedia from '@/app/lib/getMedia';

import styles from '../../03.Molecules/ProjectsList/projects-list.module.scss';
import { PiGithubLogoThin } from 'react-icons/pi';
import { CiCalendar } from "react-icons/ci";


/**
 * Renders a project item with title, description, year, stack, link, and image.
 *
 * @async
 * @param {Object} props - The props object
 * @param {string} props.className - The class name for the project item
 * @param {string} props.title - The title of the project
 * @param {string} props.description - The description of the project
 * @param {string} props.year - The year the project was created
 * @param {Array} props.stack - The tech stack used in the project
 * @param {string} props.link - The link to the project
 * @param {string} props.image - The image for the project
 * @returns {JSX.Element} - The project item component
 */
const ProjectItem = async ({ className, title, description, year, stack, link, image }) => {
	const media = await getMedia(image);

	const [thumbnail] = await Promise.all([media]);

	return (
		<div className={`${styles.projectItem} ${className}`} data-glow>
			<div className={styles.wrapper}>
				<Animate delay={10}>
					<div className={styles.heading}>
						<Title type={'h4'}>{title}</Title>
						<p className={styles.dateOfCreation}>
							<SocialButton
								width={20}
								link={link || ""}
								icon={<PiGithubLogoThin />}
							>
								<span><CiCalendar />{year}</span>
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

			{thumbnail && (
				<figure className={styles.projectBackground}>
					<Image fill={true} className={styles.background} src={thumbnail.url} alt="" />
				</figure>
			)}
	
		</div>
	)
};

export default ProjectItem;