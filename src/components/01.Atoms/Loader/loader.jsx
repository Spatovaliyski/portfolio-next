import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  )
}

export default Loader;