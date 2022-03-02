import styles from './ExpenseDate.module.css';

export default function ExpenseDate(props) {
	// Helper Variables
	const month = props.date.toLocaleString('en-GB', { month: 'short' });
	const day = props.date.toLocaleString('en-GB', { day: 'numeric' });
	const year = props.date.toLocaleString('en-GB', { year: 'numeric' });
	//const year = props.date.getFullYear(); // Another method how to get fullYear
	return (
		<div className={styles['expense-date']}>
			<div className={styles['expense-date__month']}>{month}</div>
			<div className={styles['expense-date__year']}>{year}</div>
			<div className={styles['expense-date__day']}>{day}</div>
		</div>
	);
}
