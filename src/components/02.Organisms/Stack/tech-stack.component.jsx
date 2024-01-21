import React from 'react';

import styles from './tech-stack.module.scss';

/**
 * Renders a list of technologies used in a project.
 * @param {Object} props - The component props.
 * @param {string} props.className - The CSS class name to apply to the root element.
 * @param {Array<string>} props.items - The list of technologies to render.
 * @returns {JSX.Element} - The rendered component.
 */
const TechStack = ({ className, items }) => {
	return (
		<ul className={`${styles.techStack} ${className}`}>
			{items?.map((item, index) => (
				<li className={styles.techStackItem} key={index}>{item}</li>
			))}
		</ul>
	)
}

export default TechStack;