import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import {useState} from "react";

function ExpenseList(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.arr.filter(ex => {
        return ex.date.getFullYear().toString() === filteredYear;
    });

    let expensePageContent = <h2 className="expenses__fallback">No expenses found</h2>;

    if(filteredExpenses.length > 0) {
        expensePageContent = filteredExpenses.map(filteredExpense => (
            <ExpenseItem title={filteredExpense.title}
                         amount={filteredExpense.amount}
                         date={filteredExpense.date}
                         key={filteredExpense.id}
                         className="expenses"
            />
        ))
    }

    return (
        <div>
            <Card className="expense-list">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpenses} />
                {expensePageContent}
            </Card>
        </div>
    );
}

export default ExpenseList;