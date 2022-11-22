import React from "react";
import "./Expenceitems.css";
import ExpenceDate from "../ExpenseData/ExpenceDate";
import ExpenseDetails from "../ExpenseDetails/ExpenseDetails";
import Card from "../Card/Card";
const ExpenseItem = (props) => {
  const onDelete = (e) => {
    e.preventDefault();
    console.log(e);
    e.target.parentElement.remove();
  };
  return (
    <Card className="expense-item">
      <ExpenceDate date={props.date} />
      <ExpenseDetails amount={props.cost} title={props.title} />
      <button onClick={onDelete}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;

