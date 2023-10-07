import React from 'react'
import Animate from '@/components/01.Atoms/MountTransition/fader';

import styles from './heading-with-text.module.scss';

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