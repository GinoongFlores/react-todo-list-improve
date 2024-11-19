import React from "react";
import TodoCard from "./TodoCard";

const TodoList = () => {
  let todos = ["Go to the market", "Buy food", "Prepare meal", "Eat food"];
  return (
    <ul className="main">
      {todos.map((todo, i) => {
        return (
          //   <TodoCard key={i}>
          //     <p>{todo}</p>
          //   </TodoCard>
          <TodoCard key={i} todo={todo} />
        );
      })}
    </ul>
  );
};

export default TodoList;
