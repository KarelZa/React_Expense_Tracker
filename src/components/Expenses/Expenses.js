// Imports
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpensesFilter';
import styles from './Expenses.module.css';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

export default function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2021');
	const filteredExpenses = props.items.filter((item) => item.date.getFullYear().toString() === filteredYear); // Creating a new array based on filtered Year

	// Helper function that updates filteredYear state , based on selected data from ExpenseFilter component
	const selectYearDataHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<div>
			<Card className={styles.expenses}>
				{/*defaultSelectedYear setting default Value in filter, onSelectYearData --> getting currently selected year data */}
				<ExpenseFilter defaultSelectedYear={filteredYear} onSelectYearData={selectYearDataHandler} />
				<ExpensesChart expenses={filteredExpenses} />
				{/* Passing filteredExpenses array */}
				<ExpenseList items={filteredExpenses} />
			</Card>
		</div>
	);
}
