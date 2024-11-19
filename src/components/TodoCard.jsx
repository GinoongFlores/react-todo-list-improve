import React from "react";

const TodoCard = (props) => {
  const { todo } = props;
  return (
    <li className="todoItem">
      {todo}
      <div className="actionsContainer">
        <i className="fa-regular fa-pen-to-square"></i>
        <i className="fa-solid fa-trash"></i>
      </div>
    </li>
  );
};

export default TodoCard;
