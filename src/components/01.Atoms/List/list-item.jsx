import React from 'react';

import styles from './list-item.module.scss';

const ListItem = ( props ) => {
  const {
    start,
    finish,
    employer,
    description,
    position,
    type,
    className
  } = props;

  return (
    <li className={`${styles.listItem} ${className}`}>
      <div className={styles.dot}></div>
      <div className={styles.position}>{position}</div>
      <div className={styles.employer}>{employer}</div>
      <div className={styles.timeline}>
        <span className={styles.timelineEntry}>{start}</span>
        {'-'}
        <span className={styles.timelineEntry}>{finish || 'Ongoing'}</span>
      </div>
      <div className={styles.type}>{type}</div>

      <p className={styles.description}>{description}</p>
    </li>
  )
};

export default ListItem;