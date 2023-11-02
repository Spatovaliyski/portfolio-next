import React from 'react';

import styles from './footer.module.scss';
import Container from '@/components/01.Atoms/Container/container';

const Footer = () => {
  const currentYear = () => {
    const year = new Date().getFullYear();

    return year;
  }
  
  return (
    <div className={styles.footer}>
      <Container>
        &copy; 2022 - {currentYear()} / Made using NextJS & WordPress
      </Container>
    </div>
  )
};

export default Footer;