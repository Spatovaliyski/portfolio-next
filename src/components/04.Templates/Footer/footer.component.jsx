import styles from './footer.module.scss';
import Container from '@/components/01.Atoms/Container/container.component';

/**
 * Footer component.
 * @returns {JSX.Element} Footer component.
 */
const Footer = () => {
  const currentYear = () => {
    const year = new Date().getFullYear();

    return year;
  }
  
  return (
    <div className={styles.footer}>
      <Container>
        &copy; 2022 - {currentYear()} Made using Next.js & WordPress
      </Container>
    </div>
  )
};

export default Footer;