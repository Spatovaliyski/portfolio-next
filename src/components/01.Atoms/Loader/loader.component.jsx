import styles from './loader.module.scss';

/**
 * A component that renders a loader with three lines.
 * @returns {JSX.Element} The Loader component
 */
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