import styles from './list-item.module.scss';

/**
 * Renders a list item with job information.
 * @param {Object} props - The props object.
 * @param {string} props.start - The start date of the job.
 * @param {string} [props.finish] - The finish date of the job. If not provided, 'Ongoing' is displayed.
 * @param {string} props.employer - The name of the employer.
 * @param {string} props.description - The job description.
 * @param {string} props.position - The job position.
 * @param {string} props.type - The job type.
 * @param {string} [props.className] - Additional class name(s) for the list item.
 * @returns {JSX.Element} - The rendered list item.
 */
const ListItem = ( props ) => {
  const {
    start,
    finish,
    employer,
    description,
    position,
    type,
    className
  } = props;

  return (
    <li className={`${styles.listItem} ${className}`}>
      <div className={styles.dot}></div>
      <div className={styles.position}>{position}</div>
      <div className={styles.employer}>{employer}</div>
      <div className={styles.timeline}>
        <span className={styles.timelineEntry}>{start}</span>
        {'-'}
        <span className={styles.timelineEntry}>{finish || 'Ongoing'}</span>
      </div>
      <div className={styles.type}>{type}</div>

      <p className={styles.description}>{description}</p>
    </li>
  )
};

export default ListItem;