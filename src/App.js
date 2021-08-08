import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { id: "e1", title: "Toilet Paper", amount: 91.87, date: new Date(2021, 6, 23) },
    { id: "e2", title: "New TV", amount: 799.14, date: new Date(2021, 3, 16) },
    { id: "e3", title: "Car Insurance", amount: 2897.98, date: new Date(2021, 7, 2) },
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
