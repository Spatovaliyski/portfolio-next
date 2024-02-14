import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../../02.Organisms/Menu/menu.module.scss'

/**
 * A component that renders a navigation item with a label and an optional link.
 * @param {Object} props - The props object.
 * @param {string} props.href - The URL of the link.
 * @param {string} props.label - The label of the navigation item.
 * @param {boolean} props.external - Whether the link should open in a new tab.
 * @param {function} props.trigger - A function to be called when the navigation item is clicked.
 * @returns {JSX.Element} - The NavItem component.
 */
const NavItem = ({ href, label, external, trigger}) => {
  const pathName = usePathname();
  const isCurrent = pathName === href;

  const handleClickInternal = () => {
    if (trigger) {
      trigger();
    }
  };

  return (
    <li className={`${styles.navigationItem} ${isCurrent ? styles.isActive : ''} ${!href ? styles.noLink : ''}`}>
      {href ? (
        external ? (
          <Link href={href} onClick={handleClickInternal} target='_blank' rel='noopener noreferrer'>
            {label}
          </Link>
        ) : (
          <Link href={href} onClick={handleClickInternal}>
            {label}
          </Link>
        )
      ) : (
        <>{label}</>
      )}
    </li>
  );
};

export default NavItem;