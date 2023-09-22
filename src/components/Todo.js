import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = (props) => {

  const toggelCompleteHandler = () => {
    props.toggleComplete(props.task.id);
  }

  const editTaskHandler = () => {
    props.editTodo(props.task.id)
  }

  const removeTaskHandler = () => {
    props.removeTask(props.task.id)
  }


  return (
    <div className="Todo">
      <p onClick={toggelCompleteHandler} className={`${props.task.completed ? 'completed' : ''}`}>{props.children}</p>
      <div>
        <FontAwesomeIcon icon={faPenSquare} onClick={editTaskHandler} />
        <FontAwesomeIcon icon={faTrash} onClick={removeTaskHandler} />
      </div>
    </div>
  );
};

export default Todo;