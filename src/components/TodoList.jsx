import Todocard from "./TodoCard";
import PropTypes from "prop-types";

function TodoList(props) {
    const { todos } = props
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
            <Todocard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </Todocard>
        );
      })}
    </ul>
  );
}
TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList;
