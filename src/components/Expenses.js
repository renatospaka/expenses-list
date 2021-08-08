import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

function Expenses(props) {
  const expenses = props.expenses
  const items = expenses.forEach((item) => {
    return <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
  })
  const xItems = expenses.map((item) => {
    return <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
});
  
  return (
    <div className="expenses">
      {xItems}
    </div>
  )
}

export default Expenses;
