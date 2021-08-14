import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const initialExpenses = [
  { id: "e1", title: "Toilet Paper", amount: 91.87, date: new Date(2021, 6, 23) },
  { id: "e2", title: "New TV", amount: 799.14, date: new Date(2021, 3, 16) },
  { id: "e3", title: "Car Insurance", amount: 2897.98, date: new Date(2020, 7, 2) },
  { id: "e4", title: "React Course", amount: 9.98, date: new Date(2020, 2, 22) },
]

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = expense => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
