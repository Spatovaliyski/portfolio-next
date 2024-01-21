import React from 'react';

import styles from './employment-status.module.scss';

import { GoDotFill } from "react-icons/go";


const EmploymentStatus = ({ isLookingForWork }) => {
	const statusColor = isLookingForWork ? 'green' : 'red';
	const statusText = isLookingForWork ? 'Looking for work' : 'Not looking for work';

	return (
		<div className={styles.employmentStatus}>
			<GoDotFill color={statusColor} /> {statusText}
		</div>
	);
};

export default EmploymentStatus;