import React from 'react';

import styles from './list-with-progress.module.scss';

const ListWithProgress = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.progressBar}></div>
      <ul className={styles.list}>{children}</ul>
    </div>
  )
}

export default ListWithProgress;