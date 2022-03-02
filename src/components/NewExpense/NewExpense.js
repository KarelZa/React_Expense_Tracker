import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import styles from './NewExpense.module.css'; // css

export default function NewExpense(props) {
	const [toggleForm, setToggleForm] = useState(false);
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		// Passing data object to upper level component (-->App.js)
		props.onAddExpense(expenseData);
		setToggleForm(false);
	};
	// Helper to display input form
	const displayFormHandler = () => {
		setToggleForm((prevState) => !prevState);
	};

	return (
		<div className={styles['new-expense']}>
			{!toggleForm && (
				<button type='button' onClick={displayFormHandler}>
					Add New Expense
				</button>
			)}
			{toggleForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={displayFormHandler} />}
		</div>
	);
}
