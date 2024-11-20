import React, { useState } from "react";

const TodoInput = ({ handleAddTodo, todoValue, setTodoValue }) => {
  return (
    <header>
      <input
        type="text"
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleAddTodo(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
