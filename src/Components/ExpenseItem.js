import React from "react";
import "./Expenceitems.css";

const ExpenseItem = (props) => {
  const ExpenceData = new Date(2022, 11, 21);
  const des = "car insurence";
  const cost = 200;
  const LocationOfExpenditure = "hyd";
  return (
    <div className="expense-item">
      <div>{props.date}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.cost}</div>
        <div>{LocationOfExpenditure}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
