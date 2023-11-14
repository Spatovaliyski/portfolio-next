import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import styles from './back-arrow.module.scss';

/**
 * Renders a back arrow component with a link to the specified href.
 * @param {Object} props - The props object containing the href.
 * @param {string} props.href - The URL to link to.
 * @returns {JSX.Element} - The BackArrow component.
 */
const BackArrow = ({ href }) => {
  return (
    <Link className={styles.backTo} href={href}>
      <div className={styles.container}>
        <FontAwesomeIcon width={16} icon={faArrowLeftLong}></FontAwesomeIcon>
        <p>Back</p>
      </div>
    </Link>
  )
}

export default BackArrow;