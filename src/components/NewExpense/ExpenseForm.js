import React, { useState } from "react";
import "./ExpenseForm.css";

// What Is 'State' in ReactJS? The state is a built-in React object that is used to contain data or information about the component.
// A component's state can change over time; whenever it changes, the component re-renders.
// The useState hook is a special function that takes the initial state as an argument and returns an array of two entries.

// React doesn't care whether you changed some variable values. It'll not re-evaluate the component function. It only does that for changes to registered state values (created via useState)

// useState returns an array with exactly two elements - the second element is always a function which you can call to set a new value for your state. Calling that function will then also trigger React to re-evaluate the component.

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(""); //inititally it is empty string, because when this component is rendered for the first time nothing is entered
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //use state gives us access to that special variable + return a function to assign a new value to that variable
  //usestate returns an array with a variable and the funtion to update that variable
  //first element in the array is the current state value, second is the funtion to update first element

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //
    // React schedules state updates, it doesn't perform them instantly, and if you have a lot of them scheduled you could be depended on the outdated state, that's why this way is not ok
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    //
    // Should use this approach, this way react would guarantee that the snapshot you get in the prevState will always be the latest snapshot
    // if your state update depends on the previous state use this approach
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({ ...userInput, enteredDate: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
