import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

// or use index as a second argument in map
//gotta always add unique identifier to the map, in our case its id
// && if the first condition is met it returns the value of the second condition

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
