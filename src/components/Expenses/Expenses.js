import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css"

const Expenses = (props) => {
  const [year, setYear] = useState("2021");
  const filterYearHandler = thisYear => {setYear(thisYear)};
  const expenses = props.expenses;
  const filterExpensesHandler = expenses.filter((item) => {
    return item.date.getFullYear().toString() === year
  });
  const items = filterExpensesHandler.map((item) => {
    return (
      <ExpenseItem 
        key={item.key}
        title={item.title} 
        amount={item.amount} 
        date={item.date} 
      />
    )
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeYear={filterYearHandler} />
        {items}
      </Card>
    </div>
  )
}

export default Expenses;
