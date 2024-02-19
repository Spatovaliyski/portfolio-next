import React from 'react';
import styles from './title.module.scss';

/**
 * Renders a title element with the specified type and children.
 * @param {Object} props - The component props.
 * @param {string} props.type - The type of title element to render.
 * @param {React.ReactNode} props.children - The children to render inside the title element.
 * @returns {JSX.Element} - The rendered title element.
 */
const Title = ({ type, className, children }) => {
  const Element = type;

	return React.createElement(Element, { className: className || styles.title }, children);
}

export default Title;