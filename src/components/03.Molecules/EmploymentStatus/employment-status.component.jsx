import Animate from '@/components/01.Atoms/MountTransition/fader.component';
import styles from './employment-status.module.scss';

import { MdAddTask, MdBlock } from "react-icons/md";

const EmploymentStatus = ({ isLookingForWork }) => {
  const statusColor = isLookingForWork ? 'green' : 'red';
  const statusText = isLookingForWork ? 'Open to work' : 'Not looking at the moment';

	return (
		<Animate delay={0}>
			<div className={styles.employmentStatus}>
				<span className={styles.wrapper}>
					{isLookingForWork ?
						<MdAddTask color={statusColor} /> :
						<MdBlock color={statusColor} />
					}
					{statusText}
				</span>
			</div>
		</Animate>
  );
};

export default EmploymentStatus;