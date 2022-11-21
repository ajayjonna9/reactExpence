import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const obj = [
    {
      title: "carinsurence",
      date: new Date(2022, 11, 21).toISOString(),
      cost: 200,
    },
    {
      title: "homerent",
      date: new Date(2022, 11, 21).toISOString(),
      cost: 500,
    },
    {
      title: "laptop",
      date: new Date(2022, 11, 21).toISOString(),
      cost: 600,
    },
    {
      title: "newTv",
      date: new Date(2022, 11, 21).toISOString(),
      cost: 800,
    },
  ];
  return (
    <div>
      <h1>Expense tracker</h1>
      {obj.map((data) => {
        return (
          <ExpenseItem
            title={data.title}
            date={data.date}
            cost={data.cost}
          ></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;
