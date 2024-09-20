import PropTypes from "prop-types";
function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo  } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => handleEditTodo(index)}>
          {" "}
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

TodoCard.propTypes = {
  children: PropTypes.array.isRequired,
  handleDeleteTodo: PropTypes.function,
  index: PropTypes.number,
  handleEditTodo: PropTypes.function,
};

export default TodoCard;
