import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = ev => {
    setTitle(ev.target.value)
  };

  const amountChangeHandler = ev => {
    setAmount(ev.target.value)
  };

  const dateChangeHandler = ev => {
    setDate(ev.target.value)
  };

  const onSubmitHandler = ev => {
    ev.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    }

    props.onSaveExpenseData(expenseData)
    setTitle("")
    setAmount("")
    setDate("")
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={date} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel} >Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;
