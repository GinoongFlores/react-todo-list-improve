import { useEffect, useState } from "react";
import "./App.css";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import data from "./data/data";
import TodoCard from "./components/TodoCard";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  const persistData = (newList) => {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  };

  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
    persistData(newTodoList);
    setTodos(newTodoList);
  };

  const handleEditTodo = (index) => {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  };

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    console.log(localTodos);
    localTodos = JSON.parse(localTodos);
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}

export default App;
