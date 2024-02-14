import styles from './container.module.scss';

/**
 * A container component that wraps its children with a div element.
 * @param {Object} props - The props object containing children.
 * @returns {JSX.Element} - A div element with children.
 */
const Container = ({children}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
};

export default Container;