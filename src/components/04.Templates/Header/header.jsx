import React from 'react';
import styles from './header.module.scss';
import Menu from '@/components/02.Organisms/Menu/menu';
import Container from '@/components/01.Atoms/Container/container';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerWrapper}>
          <Menu />
        </div>
      </Container>
    </header>
  )
};

export default Header;