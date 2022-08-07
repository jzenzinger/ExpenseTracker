import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.37,
        date: new Date(2021,7,14)
    },
    {
        id: "e2",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021,2,28)
    },
    {
        id: "e3",
        title: "TV",
        amount: 794.99,
        date: new Date(2021,4,12)
    },
    {
        id: "e4",
        title: "New Wooden Desk",
        amount: 450,
        date: new Date(2021,3,28)
    }
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];  // Cleaner way to get always back latest expenses
        });
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler} />
            <ExpenseList arr={expenses} />
        </div>
    );
}

export default App;
