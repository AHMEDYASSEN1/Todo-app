import React, { useState } from "react";

const Todoform = (props) => {
  const [inputValue, setInputValue] = useState("");
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return;
    } else {
      props.addTodo(inputValue);
      setInputValue("");
    }
  };
  
  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="TodoForm" onSubmit={onSubmitHandler}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        onChange={onChangeHandler}
        value={inputValue}
      ></input>
      <button type="submit" className="todo-btn">
        ADD TASK
      </button>
    </form>
  );
};

export default Todoform;
