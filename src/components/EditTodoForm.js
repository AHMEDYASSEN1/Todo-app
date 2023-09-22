import React, { useState } from "react";

const EditTodoForm = (props) => {
  const [inputValue, setInputValue] = useState(props.task.task);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.editTodo(inputValue, props.task.id);
  };

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="TodoForm" onSubmit={onSubmitHandler}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        value={inputValue}
        onChange={onChangeHandler}
      ></input>
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
