import React from 'react';

import styles from './tech-stack.module.scss';

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