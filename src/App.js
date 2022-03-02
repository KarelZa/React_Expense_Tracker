import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// Array of objects with expenses
const INNITIAL_EXPENSES = [
	{
		id: 'e1', // identificator of object --> must be unique
		title: 'Mobile Charger', // expense title
		amount: 94.12, // expense price
		date: new Date(2020, 7, 14), // date of bought
	},
	{ id: 'e2', title: 'Apple Iphone Xs', amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Health Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'Asus laptop',
		amount: 1050,
		date: new Date(2021, 5, 12),
	},
];

function App() {
	const [expenses, setExpenses] = useState(INNITIAL_EXPENSES);

	const addExpenseHandler = (expense) => {
		// Updating an Array / Object state based on a previous snapshot of that state
		setExpenses((prevExpenses) => [expense, ...prevExpenses]);
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
