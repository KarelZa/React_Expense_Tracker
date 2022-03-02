import React from 'react';
import ExpenseItem from './ExpenseItem';
import styles from './ExpenseList.module.css';

export default function ExpenseList(props) {
	// Returning Component based on condition
	if (props.items.length === 0) {
		return <h2 className={styles['expenses-list__fallback']}>No Expenses has been found.</h2>;
	}

	return (
		<ul className={styles['expenses-list']}>
			{props.items.map((item) => (
				<ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
			))}
		</ul>
	);
}
