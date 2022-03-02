import React, { useState } from 'react';
import styles from './ExpenseForm.module.css';

export default function ExpenseForm(props) {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// Helper function that stores entered title text into state(enteredTitle)
	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};
	// Helper function that stores entered Amount into state
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};
	// Helper function that stores entered Date into state
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault(); // Prevents reload of the page , when request is sent
		// Stores all the seperate states into one object
		const expenseData = {
			title: enteredTitle,
			amount: Number(enteredAmount),
			date: new Date(enteredDate), // Converts String into Date format
		};
		// Passing data object to upper level component (-->NewExpense.js)
		// onSaveExpenseData will Now call saveExpenseDataHandler() , defined in NewExpense.js
		props.onSaveExpenseData(expenseData);
		// Resets Input fields
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className={styles['new-expense__controls']}>
				<div className={styles['new-expense__control']}>
					<label>Title</label>
					<input type='text' value={enteredTitle} onChange={titleChangeHandler} />
				</div>
				<div className={styles['new-expense__control']}>
					<label>Amount</label>
					<input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
				</div>
				<div className={styles['new-expense__control']}>
					<label>Date</label>
					<input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
				</div>
			</div>
			<div className={styles['new-expense__actions']}>
				<button type='button' onClick={props.onCancel}>
					Cancel
				</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
}
