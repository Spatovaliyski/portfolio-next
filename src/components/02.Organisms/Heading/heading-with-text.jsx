import React from 'react'
import Animate from '@/components/01.Atoms/MountTransition/fader';

import styles from './heading-with-text.module.scss';

/**
 * Renders a heading component with optional title, subtitle, and description.
 * @param {Object} props - The component props.
 * @param {string} props.title - The title to display.
 * @param {string} props.subtitle - The subtitle to display.
 * @param {string} props.description - The description to display.
 * @param {string} props.className - The class name to apply to the component.
 * @returns {JSX.Element} - The rendered component.
 */
const HeadingWithText = ({ title, subtitle, description, className }) => {
  return (
    <div className={`${styles.heading} ${className}`}>
      {title && (
        <Animate delay={0}>
          <h1 className={styles.headingTitle}>{title}</h1>
        </Animate>
      )}

      {subtitle && (
        <Animate delay={20}>
          <h2 className={styles.headingSubTitle}>{subtitle}</h2>
        </Animate>
      )}

      {description && (
        <Animate delay={30}>
          <p className={styles.headingDescription}>{description}</p>
        </Animate>
      )}
    </div>
  )
};

export default HeadingWithText;