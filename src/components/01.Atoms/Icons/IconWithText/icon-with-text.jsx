import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './icon-with-text.module.scss';

const IconWithText = ({ name, width, icon, color }) => {
  const iconElement = (
    <div className={styles.iconWithText}>
      <div className={styles.container} data-icon={name} style={{ backgroundColor: color }}>
        <FontAwesomeIcon width={width || 26} height={width || 26} icon={icon} />
      </div>
      <div>{name}</div>
    </div>
  );

  return iconElement;
};

export default IconWithText;
