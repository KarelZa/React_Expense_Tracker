import React from 'react';
import styles from './ExpensesFilter.module.css';

export default function ExpenseFilter(props) {
	// Helper function that changes selected Year, and passing data to parent component
	const selectChangeHandler = (event) => {
		props.onSelectYearData(event.target.value);
	};

	return (
		<div className={styles['expenses-filter']}>
			<div className={styles['expenses-filter__control']}>
				<label>Filter by year</label>
				<select onChange={selectChangeHandler} value={props.defaultSelectedYear}>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
				</select>
			</div>
		</div>
	);
}
