import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './icon-with-text.module.scss';

/**
 * Renders an icon with text.
 * @param {Object} props - The component props.
 * @param {string} props.name - The name of the icon.
 * @param {number} props.width - The width of the icon.
 * @param {Object} props.icon - The icon object.
 * @param {string} props.color - The background color of the icon container.
 * @returns {JSX.Element} - The rendered component.
 * 
 * @deprecated
 */
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
