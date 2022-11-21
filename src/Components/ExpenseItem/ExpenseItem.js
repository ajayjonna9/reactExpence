import React from "react";
import "./Expenceitems.css";
import ExpenceDate from "../ExpenseData/ExpenceDate";
import ExpenseDetails from "../ExpenseDetails/ExpenseDetails";
import Card from "../Card/Card";
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenceDate date={props.date} />
      <ExpenseDetails amount={props.cost} title={props.title} />
    </Card>
  );
};

export default ExpenseItem;
