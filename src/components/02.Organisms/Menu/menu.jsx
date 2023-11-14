'use client'

import { useState } from 'react';
import NavItem from '@/components/01.Atoms/NavItem/nav-item';

import styles from './menu.module.scss';

/**
 * Renders a menu component with a desktop and mobile version.
 * @returns {JSX.Element} The Menu component.
 */
const Menu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  }

  return (
    <>
      {/* Desktop Menu */}
      <ul className={styles.navigation}>
        <NavItem href='/' label='About me' />
        <NavItem href='/experience' label='Experience' />
        <NavItem href='/projects' label='Projects' />
        <NavItem href='/blog' label='Blog' />
        <NavItem href='https://wp.spatovaliyski.com/martins-resume/' label='Resume' external />
      </ul>

      {/* Hamburger Menu Icon for Mobile */}
      <div className={styles.hamburgerIcon} onClick={toggleMobileMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay}>
          <ul className={styles.mobileMenu}>
            <NavItem href='/' label='About me' trigger={closeMobileMenu} />
            <NavItem href='/experience' label='Experience' trigger={closeMobileMenu} />
            <NavItem href='/projects' label='Projects' trigger={closeMobileMenu} />
            <NavItem href='/blog' label='Blog' trigger={closeMobileMenu} />
            <NavItem href='https://wp.spatovaliyski.com/martins-resume/' label='Resume' external trigger={closeMobileMenu} />
          </ul>
        </div>
      )}
    </>
  );
};

export default Menu;
