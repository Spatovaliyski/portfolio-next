import React from 'react';

import styles from './list-with-progress.module.scss';

/**
 * A component that renders a list with a progress bar.
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The children to be rendered inside the list.
 * @returns {JSX.Element} - The ListWithProgress component.
 */
const ListWithProgress = ({children}) => {
	return (
		<div className={styles.container}>
			<div className={styles.progressBar}></div>
			<ul className={styles.list}>{children}</ul>
		</div>
	)
}

export default ListWithProgress;