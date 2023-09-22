import React, { useState } from "react";
import Todoform from "./Todoform";
import EditTodoForm from "./EditTodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const removeTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="TodoWrapper">
      <h1>Get things done!</h1>
      <Todoform addTodo={addTodo} />
      {/* display todos */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm
            task={todo}
            editTodo={editTask}
          />
        ) : (
          <Todo
            task={todo}
            key={todo.id}
            id={todo.id}
            toggleComplete={toggleComplete}
            removeTask={removeTask}
            editTodo={editTodo}
          >
            {todo.task}
          </Todo>
        )
      )}
    </div>
  );
};
export default TodoWrapper;
