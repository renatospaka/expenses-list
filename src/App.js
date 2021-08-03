import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: "e1", title: "Toilet Paper", amount: 91.87, date: new Date(2021, 6, 23) },
    { id: "e2", title: "New TV", amount: 799.14, date: new Date(2021, 3, 16) },
    { id: "e3", title: "Car Insurance", amount: 2897.98, date: new Date(2021, 7, 2) },
  ]
  console.log(expenses);

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
