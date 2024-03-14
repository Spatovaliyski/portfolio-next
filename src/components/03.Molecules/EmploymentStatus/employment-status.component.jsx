import Animate from '@/components/01.Atoms/MountTransition/fader.component';
import styles from './employment-status.module.scss';

import { MdAddTask, MdBlock } from "react-icons/md";
import getAvailability from '@/app/lib/getAvailability';

const EmploymentStatus = async () => {
  const availability = await getAvailability();
  
  return (
    <Animate delay={0}>
      <div className={styles.employmentStatus}>
        {availability.opentowork &&
        <span className={styles.wrapper}>
          <MdAddTask color={'green'} />
          {'Open to work'}
        </span>
        }
      </div>
    </Animate>
  );
};

export default EmploymentStatus;