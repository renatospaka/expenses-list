import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart"

import "./Expenses.css"

const Expenses = (props) => {
  const [year, setYear] = useState("2021");
  const filterYearHandler = thisYear => {setYear(thisYear)};

  const filterExpensesHandler = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === year
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeYear={filterYearHandler} />
        <ExpensesChart expenses={filterExpensesHandler} />
        <ExpensesList expenses={filterExpensesHandler} />
      </Card>
    </div>
  )
}

export default Expenses;
