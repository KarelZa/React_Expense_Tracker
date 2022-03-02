import styles from './ExpenseItem.module.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React from 'react';

function ExpenseItem(props) {
	return (
		<li>
			<Card className={styles['expense-item']}>
				<ExpenseDate date={props.date} /> {/* passing date from props to ExpenseDate component */}
				<div className={styles['expense-item__description']}>
					<h2>{props.title}</h2>
					<div className={styles['expense-item__price']}>€{props.amount}</div>
				</div>
			</Card>
		</li>
	);
}

export default ExpenseItem;
