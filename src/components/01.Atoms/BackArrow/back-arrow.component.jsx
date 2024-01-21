import React from 'react'
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";
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
        <HiOutlineArrowUturnLeft />
        <p>Back</p>
      </div>
    </Link>
  )
}

export default BackArrow;