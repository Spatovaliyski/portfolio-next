import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../../02.Organisms/Menu/menu.module.scss'

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