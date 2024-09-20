import { useState } from "react";
import PropTypes from "prop-types";

function TodoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        value={todoValue}
        type="text"
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter a task..."
      />

      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add Task
      </button>
    </header>
  );
}
TodoInput.propTypes = {
  TodoInput: PropTypes.function,
  handleAddTodos: PropTypes.function,
  todoValue: PropTypes.string,
  setTodoValue: PropTypes.func,
};
export default TodoInput;
