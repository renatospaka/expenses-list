import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css"

const Expenses = (props) => {
  const [year, setYear] = useState("2021")

  const expenses = props.expenses
  const items = expenses.map((item) => {
    return <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
  });
  
  const filterYearHandler = selectedYear => {
    console.log("Expenses.js")
    console.log(selectedYear)
  }

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
