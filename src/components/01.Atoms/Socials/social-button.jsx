import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Renders a social button with an icon and optional text.
 * @param {Object} props - The props object.
 * @param {string} props.link - The link to the social media page.
 * @param {string} [props.buttonColor] - The color of the button.
 * @param {string} [props.width] - The width of the icon.
 * @param {boolean} [props.external] - Whether the link should open in a new tab.
 * @param {Object} props.icon - The icon to display.
 * @param {string} [props.children] - The optional text to display next to the icon.
 * @param {string} [props.className] - The optional class name for the link element.
 * @returns {JSX.Element} - The social button element.
 */
const SocialButton = ({ link, buttonColor, width, external, icon, children, className }) => {
	const iconElement = (
		<Link className={className} href={link} style={!!buttonColor ? { color: buttonColor} : {}} target={!!external ? '_blank' : ''}> 
			<FontAwesomeIcon width={width} icon={icon} />
			{children}
		</Link>
	);

	return iconElement;
};

export default SocialButton;
